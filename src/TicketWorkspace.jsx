import { useState } from 'react'
import styled from 'styled-components'
import MergeDrawer from './MergeDrawer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`

const TopSection = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

const TicketTabBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 44px;
  border-bottom: 1px solid #e9ebed;
  flex-shrink: 0;
`

const TabList = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const TabItem = styled.span`
  font-size: 13px;
  color: ${props => props.$active ? '#2f3941' : '#68737d'};
  cursor: pointer;
  padding: 12px 0;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #2f3941;
  }
`


const TicketBadgeArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 32px;
`

const OpenBadge = styled.span`
  background: #e35b51;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 3px;
`

const TicketNumber = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
`

const NextButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  background: none;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`

const LeftPanel = styled.div`
  width: 280px;
  border-right: 1px solid #e9ebed;
  overflow-y: auto;
  padding: 16px;
  flex-shrink: 0;
`

const FieldGroup = styled.div`
  margin-bottom: 16px;
`

const FieldLabelEl = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 4px;
`

const FieldLink = styled.span`
  font-size: 12px;
  color: #1f73b7;
  margin-left: auto;
  cursor: pointer;
`

const SelectField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 8px;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #e9ebed;
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 11px;
  color: #49545c;
`

const TagClose = styled.span`
  cursor: pointer;
  font-size: 10px;
`

const FieldRow = styled.div`
  display: flex;
  gap: 12px;
`

const HalfField = styled.div`
  flex: 1;
`

const EmptyInput = styled.div`
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 13px;
  min-height: 20px;
`

const CenterPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

const TicketHeader = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #e9ebed;
`

const TicketHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`

const TicketTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #2f3941;
  margin: 0;
`

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const HeaderIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  padding: 4px;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`

const TicketMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #68737d;
`

const IntentLink = styled.span`
  color: #1f73b7;
  cursor: pointer;
`

const SummaryLink = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #1f73b7;
  cursor: pointer;
  margin-top: 8px;
`

const ConversationArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
`

const MessageRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e9ebed;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #49545c;
`

const MessageContent = styled.div`
  flex: 1;
`

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`

const MessageAuthor = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
`

const MessageAction = styled.span`
  font-size: 12px;
  color: #1f73b7;
  cursor: pointer;
`

const MessageTime = styled.span`
  font-size: 12px;
  color: #68737d;
`

const MessageBody = styled.p`
  font-size: 14px;
  color: #2f3941;
  margin: 0;
`

const ComposerArea = styled.div`
  border-top: 1px solid #e9ebed;
  padding: 12px 24px;
`

const ComposerTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 13px;
  color: #2f3941;
`

const ComposerTo = styled.span`
  color: #68737d;
`

const ComposerRecipient = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`

const ComposerInput = styled.div`
  font-size: 14px;
  color: #2f3941;
  min-height: 40px;
  padding: 8px 0;
`

const ComposerToolbarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  color: #68737d;
`

const ToolbarBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  padding: 2px;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #038153;
  margin-left: auto;
`

const BottomBar = styled.div`
  border-top: 1px solid #e9ebed;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MacroSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
`

const SubmitArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const CloseTabBtn = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`

const SubmitBtn = styled.button`
  background: #2f3941;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #49545c;
  }
`

const RightIconBar = styled.div`
  width: 50px;
  border-left: 1px solid #e9ebed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  gap: 4px;
  flex-shrink: 0;
`

const IconBarBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: ${props => props.$active ? 'rgba(31, 115, 183, 0.1)' : 'none'};
  border: none;
  cursor: pointer;
  color: ${props => props.$active ? '#1f73b7' : '#68737d'};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${props => props.$active ? 'rgba(31, 115, 183, 0.1)' : '#f5f5f5'};
    color: ${props => props.$active ? '#1f73b7' : '#2f3941'};
  }
`

const IconBarDivider = styled.div`
  width: 24px;
  height: 1px;
  background: #e9ebed;
  margin: 4px 0;
`

const DrawerPanel = styled.div`
  width: 380px;
  border-left: 1px solid #e9ebed;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
`

const DrawerPanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid #e9ebed;
  flex-shrink: 0;
`

const DrawerPanelTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`

const CollapseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  padding: 4px;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`

const ticketConversations = {
  23: {
    messages: [
      { author: 'Rodrigo De Conceição', initials: 'RC', time: 'May 05 13:47', body: 'Hi, I ordered a Rusteze racing hoodie (order #8812) last week and was charged twice. $49.99 each time. Can I get a refund on the duplicate charge? I\'ve attached my bank statement showing both transactions.' },
      { author: 'Rusty Admin', initials: 'RA', time: 'May 05 14:03', action: 'Assign', body: 'Hey Rodrigo, thanks for reaching out. I can see the duplicate charge on our end. I\'ve initiated a refund for $49.99. It should appear on your statement within 5-7 business days. Let me know if you don\'t see it by then.' },
      { author: 'Rodrigo De Conceição', initials: 'RC', time: 'May 05 14:15', body: 'Thanks! Also, the hoodie arrived but it\'s a size too small. Can I exchange it or get a refund on that one too?' },
    ],
    draft: 'No problem, I can set up a return label for the exchange. Would you like the same hoodie in the next size up?'
  },
  19: {
    messages: [
      { author: 'Rodrigo De Conceição', initials: 'RC', time: 'May 04 09:12', body: 'I want to return all the merch I bought last month. The quality isn\'t what I expected. The print on the t-shirt is already cracking after one wash.' },
      { author: 'Rusty Admin', initials: 'RA', time: 'May 04 10:30', action: 'Assign', body: 'Sorry to hear that, Rodrigo. We can definitely process a return. Could you let me know which items you\'d like to send back? I\'ll generate return labels for each.' },
    ],
    draft: ''
  },
  20: {
    messages: [
      { author: 'Rodrigo De Conceição', initials: 'RC', time: 'May 04 11:05', body: 'Hey, I never got my refund for the Piston Cup replica I returned 3 weeks ago. Tracking shows it was delivered back to your warehouse on April 15.' },
      { author: 'Rusty Admin', initials: 'RA', time: 'May 04 11:45', body: 'Let me look into that. I can see the return was received but it looks like the refund wasn\'t triggered. I\'m processing it now. $34.99 back to your original payment method.' },
      { author: 'Rodrigo De Conceição', initials: 'RC', time: 'May 04 12:01', body: 'Appreciate it. How long will it take this time?' },
    ],
    draft: 'Typically 3-5 business days. I\'ve flagged it as priority so it should be on the faster end.'
  },
  21: {
    messages: [
      { author: 'Rodrigo De Conceição', initials: 'RC', time: 'May 04 14:22', body: 'I placed order #9201 for a pit crew jacket and the Lightning McQueen diecast set. I want to cancel and get a full refund since the order hasn\'t shipped yet.' },
      { author: 'Rusty Admin', initials: 'RA', time: 'May 04 15:00', body: 'I was able to cancel order #9201 before it shipped. Your refund of $87.50 will be processed within 24 hours.' },
    ],
    draft: ''
  },
  22: {
    messages: [
      { author: 'Rodrigo De Conceição', initials: 'RC', time: 'May 04 16:33', body: 'I got charged for a subscription renewal I thought I cancelled. $12.99/month for the Rusteze Fan Club. Can you refund the last charge and make sure it\'s cancelled?' },
      { author: 'Rusty Admin', initials: 'RA', time: 'May 05 09:15', action: 'Assign', body: 'I\'ve confirmed your subscription is now cancelled and refunded the most recent $12.99 charge. You won\'t be billed again.' },
      { author: 'Rodrigo De Conceição', initials: 'RC', time: 'May 05 09:22', body: 'Perfect, thank you.' },
    ],
    draft: 'You\'re welcome! Let us know if there\'s anything else.'
  },
}

const defaultConversation = {
  messages: [
    { author: 'Rodrigo De Conceição', initials: 'RC', time: 'May 05 10:00', body: 'Hi, I need help with a refund for my recent order. The item arrived damaged and I\'d like to return it.' },
    { author: 'Rusty Admin', initials: 'RA', time: 'May 05 10:30', action: 'Assign', body: 'Sorry about that! I\'ll get a return label sent to your email right away. Once we receive the item back, we\'ll process the refund.' },
  ],
  draft: ''
}

function TicketWorkspace({ ticket, onBack, onMergeComplete, onAddTab, activeTopTab, previousTicketId }) {
  const [mergeOpen, setMergeOpen] = useState(true)
  const [activeIcon, setActiveIcon] = useState('merge')
  const [visitedTickets, setVisitedTickets] = useState([ticket.id])

  const handleIconClick = (icon) => {
    if (icon === 'merge') {
      setMergeOpen(!mergeOpen)
      setActiveIcon(mergeOpen ? null : 'merge')
    } else {
      setActiveIcon(icon)
      setMergeOpen(false)
    }
  }

  const closeMerge = () => {
    setMergeOpen(false)
    setActiveIcon(null)
  }

  const completeMerge = () => {
    setMergeOpen(false)
    onMergeComplete()
  }

  const openTicketTab = (ticketInfo) => {
    if (!visitedTickets.includes(ticketInfo.id)) {
      setVisitedTickets(prev => [...prev, ticketInfo.id])
    }
    onAddTab?.(ticketInfo)
  }

  return (
    <Container>
    <TicketTabBar>
      <TabList>
        <TabItem>Email (create)</TabItem>
        <TabItem>Rodrigo De Conceição</TabItem>
      </TabList>
      <TicketBadgeArea>
        <OpenBadge>Open</OpenBadge>
        <TicketNumber>Ticket #{ticket.id}</TicketNumber>
      </TicketBadgeArea>
      <NextButton onClick={onBack}>
        Next
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </NextButton>
    </TicketTabBar>
    <TopSection>
      <LeftPanel>
        <FieldGroup>
          <FieldLabelEl>Brand</FieldLabelEl>
          <SelectField>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#038153' }} />
            Rusteze
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 'auto' }}>
              <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SelectField>
        </FieldGroup>

        <FieldGroup>
          <FieldLabelEl>Requester</FieldLabelEl>
          <SelectField>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
              <circle cx="8" cy="5" r="3"/>
              <path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"/>
            </svg>
            Rodrigo De Conceição
          </SelectField>
        </FieldGroup>

        <FieldGroup>
          <FieldLabelEl>
            Assignee*
            <FieldLink>take it</FieldLink>
          </FieldLabelEl>
          <SelectField>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
              <circle cx="8" cy="5" r="3"/>
              <path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"/>
            </svg>
            Support
          </SelectField>
        </FieldGroup>

        <FieldGroup>
          <FieldLabelEl>
            Followers
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="#68737d" strokeWidth="1.5"/>
              <path d="M8 5v2M8 9.5v.5" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <FieldLink>follow</FieldLink>
          </FieldLabelEl>
          <SelectField>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 'auto' }}>
              <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SelectField>
        </FieldGroup>

        <FieldGroup>
          <FieldLabelEl>Tags</FieldLabelEl>
          <TagsContainer>
            <Tag>intent__billing__refund__request <TagClose>×</TagClose></Tag>
            <Tag>intent_confidence__high <TagClose>×</TagClose></Tag>
            <Tag>language__en <TagClose>×</TagClose></Tag>
            <Tag>language_confidence__high <TagClose>×</TagClose></Tag>
            <Tag>sentiment__neutral <TagClose>×</TagClose></Tag>
            <Tag>sentiment_confidence__high <TagClose>×</TagClose></Tag>
          </TagsContainer>
        </FieldGroup>

        <FieldRow>
          <HalfField>
            <FieldLabelEl>Type</FieldLabelEl>
            <SelectField>
              -
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 'auto' }}>
                <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SelectField>
          </HalfField>
          <HalfField>
            <FieldLabelEl>Priority</FieldLabelEl>
            <SelectField>
              -
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 'auto' }}>
                <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SelectField>
          </HalfField>
        </FieldRow>

        <FieldGroup style={{ marginTop: 16 }}>
          <FieldLabelEl>Summary</FieldLabelEl>
          <EmptyInput />
        </FieldGroup>

        <FieldGroup>
          <FieldLabelEl>Intent</FieldLabelEl>
          <SelectField>
            Refund request
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 'auto' }}>
              <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SelectField>
        </FieldGroup>

        <FieldGroup>
          <FieldLabelEl>Language</FieldLabelEl>
          <SelectField>
            English
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 'auto' }}>
              <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SelectField>
        </FieldGroup>
      </LeftPanel>

      <CenterPanel>
        <TicketHeader>
          <TicketHeaderTop>
            <TicketTitle>{ticket.title || ticket.subject}</TicketTitle>
            <HeaderIcons>
              <HeaderIcon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 4h12M2 8h12M2 12h12" strokeLinecap="round"/>
                </svg>
              </HeaderIcon>
              <HeaderIcon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 4l3 3-3 3M8 12h6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </HeaderIcon>
              <HeaderIcon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 2v12M2 8l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </HeaderIcon>
              <HeaderIcon>
                <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
                  <circle cx="2" cy="3" r="1.5"/><circle cx="2" cy="8" r="1.5"/><circle cx="2" cy="13" r="1.5"/>
                </svg>
              </HeaderIcon>
            </HeaderIcons>
          </TicketHeaderTop>
          <TicketMeta>
            Via web form &nbsp;|&nbsp; Intent <IntentLink>Refund request</IntentLink> &nbsp;|&nbsp; Neutral
          </TicketMeta>
          <SummaryLink>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#1f73b7" strokeWidth="1.5">
              <path d="M2 4h12M2 8h8M2 12h10" strokeLinecap="round"/>
            </svg>
            View ticket summary
          </SummaryLink>
        </TicketHeader>

        <ConversationArea>
          {(ticketConversations[ticket.id] || defaultConversation).messages.map((msg, i) => (
            <MessageRow key={i}>
              <Avatar>{msg.initials}</Avatar>
              <MessageContent>
                <MessageHeader>
                  <MessageAuthor>{msg.author}</MessageAuthor>
                  {msg.action && <MessageAction>{msg.action}</MessageAction>}
                  <MessageTime>• {msg.time}</MessageTime>
                </MessageHeader>
                <MessageBody>{msg.body}</MessageBody>
              </MessageContent>
            </MessageRow>
          ))}
        </ConversationArea>

        <ComposerArea>
          <ComposerTop>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#68737d" strokeWidth="1.5">
              <path d="M4 10l6-6v4c6 0 8 3 8 8-2-3-4-4-8-4v4l-6-6z" strokeLinejoin="round"/>
            </svg>
            Public reply
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <ComposerTo>To</ComposerTo>
            <ComposerRecipient>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#1f73b7" strokeWidth="1.5">
                <circle cx="8" cy="5" r="3"/><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"/>
              </svg>
              Rodrigo De Conceição
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
                <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round"/>
              </svg>
            </ComposerRecipient>
            <span style={{ marginLeft: 'auto', color: '#1f73b7', cursor: 'pointer', fontSize: 12 }}>CC</span>
          </ComposerTop>
          <ComposerInput>{(ticketConversations[ticket.id] || defaultConversation).draft}</ComposerInput>
          <StatusDot />
          <ComposerToolbarRow>
            <ToolbarBtn><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 2l4 4-8 8H2v-4l8-8z" strokeLinejoin="round"/></svg></ToolbarBtn>
            <ToolbarBtn><svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 5v10M7 5h3.5a3 3 0 010 6H7M7 11h4a3 3 0 010 4H7"/></svg></ToolbarBtn>
            <ToolbarBtn><svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="10" r="7"/><circle cx="7.5" cy="8.5" r="1" fill="currentColor" stroke="none"/><circle cx="12.5" cy="8.5" r="1" fill="currentColor" stroke="none"/><path d="M7 12.5c1 1.5 5 1.5 6 0"/></svg></ToolbarBtn>
            <ToolbarBtn><svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5"/><path d="M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5"/></svg></ToolbarBtn>
            <ToolbarBtn><svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z"/><path d="M4 13l2 2 8-8"/></svg></ToolbarBtn>
          </ComposerToolbarRow>
        </ComposerArea>

      </CenterPanel>

      {mergeOpen && (
        <DrawerPanel>
          {visitedTickets.map(tid => (
            <div key={tid} style={{ display: tid === ticket.id ? 'contents' : 'none' }}>
              <MergeDrawer
                sourceTickets={[tid]}
                onClose={closeMerge}
                onMerge={completeMerge}
                embedded
                onTitleClick={openTicketTab}
                previousTicketId={previousTicketId}
              />
            </div>
          ))}
        </DrawerPanel>
      )}

      <RightIconBar>
        {/* User */}
        <IconBarBtn onClick={() => handleIconClick('user')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="10" cy="6" r="3.5"/>
            <path d="M3.5 18c0-3.5 3-6.5 6.5-6.5s6.5 3 6.5 6.5" strokeLinecap="round"/>
          </svg>
        </IconBarBtn>
        {/* Knowledge base */}
        <IconBarBtn onClick={() => handleIconClick('knowledge')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="2" width="14" height="16" rx="2"/>
            <path d="M7 6h6M7 9.5h6M7 13h4" strokeLinecap="round"/>
          </svg>
        </IconBarBtn>
        {/* Linked conversation */}
        <IconBarBtn onClick={() => handleIconClick('conversation')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h9v7H7.5L5 13.5V11H4V4z" strokeLinejoin="round"/>
            <path d="M13 7h3v7h-1v2.5L12.5 14H9v-3" strokeLinejoin="round"/>
          </svg>
        </IconBarBtn>
        {/* Merge/ticket+ */}
        <IconBarBtn $active={activeIcon === 'merge'} onClick={() => handleIconClick('merge')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="10" height="13" rx="2" strokeLinejoin="round"/>
            <path d="M6 8h4M6 11h3" strokeLinecap="round"/>
            <circle cx="15" cy="7" r="4" fill="#fff" stroke="currentColor"/>
            <path d="M15 5v4M13 7h4" strokeLinecap="round"/>
          </svg>
        </IconBarBtn>
        {/* Checkmark circle */}
        <IconBarBtn onClick={() => handleIconClick('check')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="10" cy="10" r="7.5"/>
            <path d="M6.5 10l2.5 2.5L13.5 8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconBarBtn>
        {/* Grid/apps */}
        <IconBarBtn onClick={() => handleIconClick('apps')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="5.5" height="5.5" rx="1"/>
            <rect x="11.5" y="3" width="5.5" height="5.5" rx="1"/>
            <rect x="3" y="11.5" width="5.5" height="5.5" rx="1"/>
            <rect x="11.5" y="11.5" width="5.5" height="5.5" rx="1"/>
          </svg>
        </IconBarBtn>
        <IconBarDivider />
        {/* Plus */}
        <IconBarBtn>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 4v12M4 10h12" strokeLinecap="round"/>
          </svg>
        </IconBarBtn>
      </RightIconBar>
    </TopSection>

    <BottomBar>
      <MacroSelect>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#2f3941" strokeWidth="1.5">
          <path d="M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z" transform="scale(0.8) translate(1,1)"/>
        </svg>
        Apply macro
        <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </MacroSelect>
      <SubmitArea>
        <CloseTabBtn>
          Close tab
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </CloseTabBtn>
        <SubmitBtn>
          Submit as Open
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SubmitBtn>
      </SubmitArea>
    </BottomBar>
    </Container>
  )
}

export default TicketWorkspace
