import { useState, useEffect } from 'react'
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'
import Views from './Views'
import TicketWorkspace from './TicketWorkspace'
import MergeDrawer from './MergeDrawer'
import Notification from './Notification'
import Shell from './Shell'
import './App.css'

function App() {
  const [selectedTickets, setSelectedTickets] = useState([])
  const [mergeOpen, setMergeOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [mergedTickets, setMergedTickets] = useState([])
  const [lastMergeCount, setLastMergeCount] = useState(0)
  const [openTicket, setOpenTicket] = useState(null)
  const [previousTicketId, setPreviousTicketId] = useState(null)
  const [topTabs, setTopTabs] = useState([])
  const [activeTopTab, setActiveTopTab] = useState(null)

  const startMerge = () => {
    setMergeOpen(true)
  }

  const closeMerge = () => {
    setMergeOpen(false)
  }

  const completeMerge = () => {
    setLastMergeCount(selectedTickets.length)
    setMergedTickets(prev => [...prev, ...selectedTickets])
    setMergeOpen(false)
    setSelectedTickets([])
    setShowNotification(true)
  }

  const handleOpenTicket = (ticket) => {
    setOpenTicket(ticket)
    if (!topTabs.find(t => t.id === ticket.id)) {
      setTopTabs(prev => [...prev, ticket])
    }
    setActiveTopTab(ticket.id)
  }

  const handleAddTab = (tab) => {
    if (!topTabs.find(t => t.id === tab.id)) {
      setTopTabs(prev => [...prev, tab])
    }
    setPreviousTicketId(openTicket?.id || null)
    setActiveTopTab(tab.id)
    setOpenTicket(tab)
  }

  const handleTabClick = (tabId) => {
    setPreviousTicketId(openTicket?.id || null)
    setActiveTopTab(tabId)
    const tab = topTabs.find(t => t.id === tabId)
    if (tab) {
      setOpenTicket(tab)
    }
  }

  const handleTabClose = (tabId) => {
    setTopTabs(prev => prev.filter(t => t.id !== tabId))
    if (activeTopTab === tabId) {
      const remaining = topTabs.filter(t => t.id !== tabId)
      if (remaining.length > 0) {
        setActiveTopTab(remaining[remaining.length - 1].id)
        setOpenTicket(remaining[remaining.length - 1])
      } else {
        setActiveTopTab(null)
        setOpenTicket(null)
      }
    }
  }

  const handleBack = () => {
    setOpenTicket(null)
    setActiveTopTab(null)
    setTopTabs([])
  }

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Shell
        tabs={topTabs}
        activeTab={activeTopTab}
        onTabClick={handleTabClick}
        onTabClose={handleTabClose}
      >
        {openTicket ? (
          <TicketWorkspace
            ticket={openTicket}
            onBack={handleBack}
            onMergeComplete={() => {
              setLastMergeCount(1)
              setMergedTickets(prev => [...prev, openTicket.id])
              handleBack()
              setShowNotification(true)
            }}
            onAddTab={handleAddTab}
            activeTopTab={activeTopTab}
            previousTicketId={previousTicketId}
          />
        ) : (
          <>
            <Views
              selectedTickets={selectedTickets}
              setSelectedTickets={setSelectedTickets}
              mergedTickets={mergedTickets}
              onMerge={startMerge}
              onTicketClick={handleOpenTicket}
            />
            {mergeOpen && (
              <MergeDrawer
                sourceTickets={selectedTickets}
                onClose={closeMerge}
                onMerge={completeMerge}
              />
            )}
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
