import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: #fff;
`

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 48px 80px;
`

const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`

const StepText = styled.span`
  font-size: 13px;
  color: #2f3941;
  font-weight: 400;
`

const ProgressBar = styled.div`
  display: flex;
  gap: 4px;
`

const ProgressSegment = styled.div`
  width: 40px;
  height: 3.5px;
  border-radius: 2px;
  background: ${props => props.$active ? '#2f3941' : '#d8dcde'};
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: #2f3941;
  margin: 0 0 8px;
`

const Subtitle = styled.p`
  font-size: 15px;
  color: #68737d;
  margin: 0 0 36px;
`

const Section = styled.div`
  margin-bottom: 40px;
`

const SectionHeader = styled.div`
  margin-bottom: 8px;
`

const SectionTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 8px;
`

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
`

const TicketBadge = styled.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
`

const SectionHint = styled.p`
  font-size: 14px;
  color: #68737d;
  margin: 0 0 12px;
`

const ComposerWrapper = styled.div`
  width: 630px;
  max-width: 100%;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const ComposerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  background: ${props => props.$variant === 'note' ? '#fff8ed' : '#fff'};
  cursor: pointer;
  position: relative;
`

const ComposerType = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #2f3941;
`

const ComposerChevron = styled.svg`
  width: 14px;
  height: 14px;
  margin-left: 4px;
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 16px;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 160px;
`

const DropdownItem = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #edf7ff;
  }
`

const ComposerBody = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0 16px;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: inherit;
  resize: none;
  color: #2f3941;
  background: ${props => props.$variant === 'note' ? '#fff8ed' : '#fff'};
  box-sizing: border-box;
  flex: 1;
`

const ComposerToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px 16px;
  background: ${props => props.$variant === 'note' ? '#fff8ed' : '#fff'};
`

const ToolbarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #87929d;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #2f3941;
  }
`

const Footer = styled.div`
  border-top: 1px solid #d8dcde;
  background: #fff;
  padding: 16px 56px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
  padding: 10px 16px;

  &:hover {
    text-decoration: underline;
  }
`

const MergeButton = styled.button`
  background: #2f3941;
  color: #fff;
  border: none;
  border-radius: 100px;
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #49545c;
  }
`

function ComposerDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const icon = value === 'public' ? (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#68737d" strokeWidth="1.5">
      <path d="M4 10l6-6v4c6 0 8 3 8 8-2-3-4-4-8-4v4l-6-6z" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#68737d" strokeWidth="1.5">
      <rect x="3" y="3" width="14" height="14" rx="2"/>
      <path d="M7 7h6M7 10h6M7 13h4"/>
    </svg>
  )

  return (
    <div ref={ref} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setOpen(!open)}>
      {icon}
      <ComposerType>{value === 'public' ? 'Public reply' : 'Internal note'}</ComposerType>
      <ComposerChevron viewBox="0 0 16 16" fill="none">
        <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </ComposerChevron>
      {open && (
        <DropdownMenu>
          <DropdownItem onClick={(e) => { e.stopPropagation(); onChange('public'); setOpen(false); }}>
            Public reply
          </DropdownItem>
          <DropdownItem onClick={(e) => { e.stopPropagation(); onChange('internal'); setOpen(false); }}>
            Internal note
          </DropdownItem>
        </DropdownMenu>
      )}
    </div>
  )
}

function MergeStep2({ sourceTickets, destinationTicket, onBack, onMerge }) {
  const plural = sourceTickets.length > 1
  const destTitle = destinationTicket?.title || ''
  const destId = destinationTicket?.id

  const [closeComment, setCloseComment] = useState('')
  const [destComment, setDestComment] = useState('')
  const [closeType, setCloseType] = useState('public')
  const [destType, setDestType] = useState('internal')

  useEffect(() => {
    if (destId && destTitle) {
      setCloseComment(`Merged into #${destId} ${destTitle}. This ticket is now closed.`)
      setDestComment(`This ticket now includes merged content from ${sourceTickets.map(id => `#${id}`).join(', ')}.`)
    }
  }, [destId, destTitle])

  const closeVariant = closeType === 'internal' ? 'note' : null
  const destVariant = destType === 'internal' ? 'note' : null

  return (
    <Container>
      <Content>
        <StepIndicator>
          <StepText>Step 2 of 2</StepText>
          <ProgressBar>
            <ProgressSegment $active />
            <ProgressSegment $active />
          </ProgressBar>
        </StepIndicator>

        <Title>Review merge</Title>
        <Subtitle>Review and add comments before merging.</Subtitle>

        <Section>
          <SectionHeader>
            <SectionTitle>Source ticket{plural ? 's' : ''}</SectionTitle>
            <BadgeRow>
              {sourceTickets.map(id => (
                <TicketBadge key={id}>#{id}</TicketBadge>
              ))}
            </BadgeRow>
          </SectionHeader>
          <SectionHint>{plural ? 'These tickets' : 'This ticket'} will close with this comment</SectionHint>
          <ComposerWrapper>
            <ComposerHeader $variant={closeVariant}>
              <ComposerDropdown value={closeType} onChange={setCloseType} />
            </ComposerHeader>
            <ComposerBody
              $variant={closeVariant}
              value={closeComment}
              onChange={(e) => setCloseComment(e.target.value)}
              placeholder=""
            />
            <ComposerToolbar $variant={closeVariant}>
              <ToolbarButton>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5">
                  <path d="M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5"/>
                  <path d="M5 16h5c2.5 0 4.5-1.3 4.5-3.5S12.5 9 10 9"/>
                </svg>
              </ToolbarButton>
              <ToolbarButton>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5">
                  <circle cx="10" cy="10" r="7"/>
                  <circle cx="7.5" cy="8.5" r="1" fill="#87929d" stroke="none"/>
                  <circle cx="12.5" cy="8.5" r="1" fill="#87929d" stroke="none"/>
                  <path d="M7 12.5c1 1.5 5 1.5 6 0"/>
                </svg>
              </ToolbarButton>
              <ToolbarButton>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5">
                  <path d="M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5"/>
                  <path d="M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5"/>
                </svg>
              </ToolbarButton>
              <ToolbarButton>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5">
                  <path d="M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z"/>
                  <path d="M4 13l2 2 8-8"/>
                </svg>
              </ToolbarButton>
            </ComposerToolbar>
          </ComposerWrapper>
        </Section>

        <Section>
          <SectionHeader>
            <SectionTitle>Destination ticket</SectionTitle>
            <BadgeRow>
              <TicketBadge>#{destinationTicket?.id}</TicketBadge>
            </BadgeRow>
          </SectionHeader>
          <SectionHint>This ticket will receive this comment</SectionHint>
          <ComposerWrapper>
            <ComposerHeader $variant={destVariant}>
              <ComposerDropdown value={destType} onChange={setDestType} />
            </ComposerHeader>
            <ComposerBody
              $variant={destVariant}
              value={destComment}
              onChange={(e) => setDestComment(e.target.value)}
              placeholder=""
            />
            <ComposerToolbar $variant={destVariant}>
              <ToolbarButton>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5">
                  <path d="M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5"/>
                  <path d="M5 16h5c2.5 0 4.5-1.3 4.5-3.5S12.5 9 10 9"/>
                </svg>
              </ToolbarButton>
              <ToolbarButton>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5">
                  <circle cx="10" cy="10" r="7"/>
                  <circle cx="7.5" cy="8.5" r="1" fill="#87929d" stroke="none"/>
                  <circle cx="12.5" cy="8.5" r="1" fill="#87929d" stroke="none"/>
                  <path d="M7 12.5c1 1.5 5 1.5 6 0"/>
                </svg>
              </ToolbarButton>
              <ToolbarButton>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5">
                  <path d="M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5"/>
                  <path d="M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5"/>
                </svg>
              </ToolbarButton>
              <ToolbarButton>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="#87929d" strokeWidth="1.5">
                  <path d="M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z"/>
                  <path d="M4 13l2 2 8-8"/>
                </svg>
              </ToolbarButton>
            </ComposerToolbar>
          </ComposerWrapper>
        </Section>
      </Content>

      <Footer>
        <BackButton onClick={onBack}>Back</BackButton>
        <MergeButton onClick={onMerge}>Merge tickets</MergeButton>
      </Footer>
    </Container>
  )
}

export default MergeStep2
