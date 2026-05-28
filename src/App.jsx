import { useState, useEffect } from 'react'
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'
import Views from './Views'
import MergeTickets from './MergeTickets'
import MergeStep2 from './MergeStep2'
import Notification from './Notification'
import Shell from './Shell'
import './App.css'

const ScreenWrapper = ({ visible, children }) => (
  <div style={{ display: visible ? 'contents' : 'none' }}>
    {children}
  </div>
)

function App() {
  const [screen, setScreen] = useState('views')
  const [selectedTickets, setSelectedTickets] = useState([])
  const [destinationTicket, setDestinationTicket] = useState(null)
  const [mergeStarted, setMergeStarted] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [mergedTickets, setMergedTickets] = useState([])
  const [lastMergeCount, setLastMergeCount] = useState(0)

  const startMerge = () => {
    setMergeStarted(true)
    setScreen('merge-step1')
  }

  const resetMerge = () => {
    setMergeStarted(false)
    setSelectedTickets([])
    setDestinationTicket(null)
    setScreen('views')
  }

  const completeMerge = () => {
    setLastMergeCount(selectedTickets.length)
    setMergedTickets(prev => [...prev, ...selectedTickets])
    resetMerge()
    setShowNotification(true)
  }

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Shell>
        <ScreenWrapper visible={screen === 'views'}>
          <Views
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
            mergedTickets={mergedTickets}
            onMerge={startMerge}
          />
        </ScreenWrapper>
        {mergeStarted && (
          <>
            <ScreenWrapper visible={screen === 'merge-step1'}>
              <MergeTickets
                sourceTickets={selectedTickets}
                onBack={resetMerge}
                onNext={(dest) => {
                  setDestinationTicket(dest)
                  setScreen('merge-step2')
                }}
              />
            </ScreenWrapper>
            <ScreenWrapper visible={screen === 'merge-step2'}>
              <MergeStep2
                sourceTickets={selectedTickets}
                destinationTicket={destinationTicket}
                onBack={() => setScreen('merge-step1')}
                onMerge={completeMerge}
              />
            </ScreenWrapper>
          </>
        )}
        {showNotification && (
          <Notification ticketCount={lastMergeCount} onClose={() => setShowNotification(false)} />
        )}
      </Shell>
    </ThemeProvider>
  )
}

export default App
