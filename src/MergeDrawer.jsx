import { useState, useRef } from 'react'
import styled from 'styled-components'

const Scrim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 380px;
  background: #fff;
  z-index: 101;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.08);
`

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid #e9ebed;
  flex-shrink: 0;
`

const DrawerTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`

const CloseButton = styled.button`
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

const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`

const StepRow = styled.div`
  display: flex;
  gap: 12px;
`

const StepIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StepCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.$completed ? '#E8EAEC' : props.$active ? '#5C6970' : '#e9ebed'};
  color: ${props => props.$completed ? '#49545c' : props.$active ? '#fff' : '#68737d'};
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const StepLine = styled.div`
  width: 2px;
  flex: 1;
  background: #e9ebed;
  margin: 4px 0;
`

const StepContent = styled.div`
  flex: 1;
  min-width: 0;
  padding-bottom: 24px;
`

const StepTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.$active ? '#2f3941' : '#68737d'};
  margin: 2px 0 0;
  line-height: 1.4;
`

const SectionLabel = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 16px 0 8px;
`

const StatusBadge = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
  background: ${props => props.$status === 'Open' ? '#c72a1c' : '#f79a3e'};
`

const SourceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const SourceListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const MoreLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #1f73b7;
  padding: 4px 0;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`

const TooltipOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
`

const TooltipBox = styled.div`
  position: fixed;
  background: #293239;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 16px;
  z-index: 201;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -8px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #293239;
  }
`

const TooltipTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 12px;
`


const TooltipColumns = styled.div`
  display: flex;
  gap: 24px;
`

const TooltipColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const TooltipItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`

const TooltipBadge = styled.span`
  background: #49545c;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  flex-shrink: 0;
`

const TicketBadge = styled.span`
  background: #e9ebed;
  color: #49545c;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
`

const SourceSubject = styled.span`
  font-size: 14px;
  color: #2f3941;
`

const FieldLabel = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 20px 0 2px;
`

const FieldHint = styled.p`
  font-size: 14px;
  color: #68737d;
  margin: 0 0 8px;
`

const InputContainer = styled.div`
  position: relative;
`

const InputWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  border: 1px solid ${props => props.$error ? '#cc3340' : '#c2c8cc'};
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  cursor: text;
  box-sizing: border-box;

  &:focus-within {
    border-color: ${props => props.$error ? '#cc3340' : '#1f73b7'};
    box-shadow: 0 0 0 3px ${props => props.$error ? 'rgba(204, 51, 64, 0.15)' : 'rgba(31, 115, 183, 0.15)'};
  }
`

const InputBadge = styled.span`
  background: #e9ebed;
  color: #49545c;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  white-space: nowrap;
  flex-shrink: 0;
`

const InputTicketName = styled.span`
  font-size: 14px;
  color: #2f3941;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 14px;
  padding: 0 2px;
  margin-left: auto;
  flex-shrink: 0;

  &:hover {
    color: #2f3941;
  }
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  min-width: 40px;
  padding: 0;
`

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;

  &:hover {
    background: #edf7ff;
  }
`

const DropdownBadge = styled.span`
  background: #e9ebed;
  color: #49545c;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 3px;
  flex-shrink: 0;
`

const SuggestionsLabel = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #2f3941;
  margin: 16px 0 10px;
`

const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

const SuggestionCard = styled.div`
  border: 1.5px solid ${props => props.$active ? '#1f73b7' : '#c2c8cc'};
  border-radius: 6px;
  padding: 12px;
  min-width: 0;
  overflow: hidden;
  cursor: pointer;
  background: ${props => props.$active ? 'rgba(31, 115, 183, 0.16)' : '#fff'};
  transition: border-color 0.15s, background 0.15s;

  &:hover {
    border-color: #1f73b7;
    background: ${props => props.$active ? '#edf7ff' : 'rgba(31, 115, 183, 0.08)'};
  }
`

const CardBadge = styled.span`
  background: #e9ebed;
  color: #49545c;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 3px;
`

const CardTitle = styled.span`
  display: block;
  color: #1f73b7;
  font-size: 14px;
  font-weight: 400;
  margin: 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const CardMeta = styled.span`
  display: block;
  font-size: 12px;
  color: #68737d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & + & {
    margin-top: 4px;
  }
`

const InputError = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #cc3340;
  margin-top: 6px;
`

const HoverCard = styled.div`
  position: fixed;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 16px;
  width: 320px;
  z-index: 300;
  transform: translate(calc(-100% - 12px), -50%);
`

const HoverCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`

const HoverCardAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e9ebed;
  flex-shrink: 0;
`

const HoverCardHeaderText = styled.div`
  flex: 1;
`

const HoverCardTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const HoverCardRequester = styled.div`
  font-size: 12px;
  color: #68737d;
`

const HoverCardBody = styled.div`
  border-top: 1px solid #e9ebed;
  padding-top: 12px;
`

const HoverCardBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`

const HoverCardOpenBadge = styled.span`
  background: #e35b51;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 3px;
`

const HoverCardTicketNum = styled.span`
  font-size: 13px;
  color: #2f3941;
`

const HoverCardSubject = styled.div`
  font-size: 14px;
  color: #2f3941;
  margin-bottom: 12px;
`

const HoverCardCommentLabel = styled.div`
  font-size: 12px;
  color: #68737d;
  margin-bottom: 8px;
  padding-top: 8px;
  border-top: 1px solid #e9ebed;
`

const HoverCardComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const HoverCardAuthor = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
`

const HoverCardCommentText = styled.div`
  font-size: 13px;
  color: #2f3941;
`

const HoverCardDate = styled.span`
  font-size: 12px;
  color: #68737d;
  flex-shrink: 0;
`

const OrgWarningWell = styled.div`
  background: #fff3e4;
  border: 1px solid #fed6a9;
  border-radius: 4px;
  padding: 0 40px 0 16px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 8px;
  height: 80px;
  padding-top: 20px;
  box-sizing: border-box;
`

const OrgWarningText = styled.span`
  font-size: 13px;
  color: #4c2c17;
  font-weight: 600;
`

const DrawerFooter = styled.div`
  border-top: 1px solid #e9ebed;
  padding: 0 20px;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`

const CancelBtn = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #1f73b7;
  cursor: pointer;
  height: 40px;
  padding: 0 16px;

  &:hover {
    text-decoration: underline;
  }
`

const NextBtn = styled.button`
  background: #1f73b7;
  color: #fff;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #175d97;
  }
`

const allTickets = [
  { id: 29, subject: 'Refund for duplicate charge', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 28, subject: 'Refund pending over 2 weeks', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 27, subject: 'Partial refund not received', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 26, subject: 'Refund went to wrong card', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 25, subject: 'Refund request for gift order', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 24, subject: 'Refund denied but item returned', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 23, subject: 'Refund merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 22, subject: 'Refund that merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 21, subject: 'Refund all merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 20, subject: 'Refund my merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 19, subject: 'Refund the merch', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 18, subject: 'PDF test', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 17, subject: 'Refund on merch', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 16, subject: 'PDF preview test', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 15, subject: 'Checking in on Dinoco product', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 14, subject: 'Return order', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 13, subject: 'Refund issues', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 12, subject: 'Shipping delay inquiry', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 11, subject: 'Account login issue', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 10, subject: 'Cancel subscription request', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 9, subject: 'Billing discrepancy', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 8, subject: 'Product not as described', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 7, subject: 'Exchange request for wrong size', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 6, subject: 'Missing item in order', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 5, subject: 'Warranty claim question', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 4, subject: 'Discount code not working', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 3, subject: 'Update shipping address', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 2, subject: 'Order confirmation not received', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 1, subject: 'General inquiry about services', brand: 'Rusteze', org: 'Radiator Springs Motors' },
  { id: 39, subject: 'Lightning McQueen bobblehead broke day 1', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 38, subject: 'Where is my Piston Cup replica', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 37, subject: 'Pit crew outfit came in wrong size', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 36, subject: 'Sponsor decal peeling off already', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 35, subject: 'Refund subscription', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 34, subject: 'Ka-chow energy drink tastes weird', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 33, subject: 'Radiator Springs tour was underwhelming', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 32, subject: 'Mater tow hook keychain rusted', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 31, subject: 'Cozy Cone motel booking glitch', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 30, subject: 'Doc Hudson poster never arrived', brand: 'Dinoco', org: 'Dinoco HQ' },
  { id: 44, subject: 'Refund for canceled event tickets', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 43, subject: 'Refund not showing on statement', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 42, subject: 'Overcharged on last order', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 41, subject: 'Refund for damaged package', brand: 'Rusteze', org: 'Piston Cup Racing' },
  { id: 40, subject: 'Double charged need refund', brand: 'Rusteze', org: 'Piston Cup Racing' },
]

const suggestions = [
  { id: 19, title: 'Refund the merch', requester: 'Rodrigo De Conceição', date: 'May 4, 2026' },
  { id: 20, title: 'Refund my merch', requester: 'Rodrigo De Conceição', date: 'May 4, 2026' },
  { id: 21, title: 'Refund all merch', requester: 'Rodrigo De Conceição', date: 'May 4, 2026' },
  { id: 22, title: 'Refund that merch', requester: 'Rodrigo De Conceição', date: 'May 4, 2026' },
  { id: 23, title: 'Refund merch', requester: 'Rodrigo De Conceição', date: 'May 5, 2026' },
  { id: 24, title: 'Refund denied but item returned', requester: 'Rodrigo De Conceição', date: 'May 5, 2026' },
  { id: 25, title: 'Refund request for gift order', requester: 'Rodrigo De Conceição', date: 'May 5, 2026' },
  { id: 40, title: 'Double charged need refund', requester: 'Rodrigo De Conceição', date: 'May 7, 2026' },
  { id: 41, title: 'Refund for damaged package', requester: 'Rodrigo De Conceição', date: 'May 7, 2026' },
  { id: 42, title: 'Overcharged on last order', requester: 'Rodrigo De Conceição', date: 'May 7, 2026' },
  { id: 43, title: 'Refund not showing on statement', requester: 'Rodrigo De Conceição', date: 'May 8, 2026' },
  { id: 44, title: 'Refund for canceled event tickets', requester: 'Rodrigo De Conceição', date: 'May 8, 2026' },
]

const getTicketStatus = (id) => {
  if (id >= 19 && id <= 29) return 'Open'
  if (id >= 40 && id <= 44) return 'Open'
  return 'New'
}

let nextCustomId = 100

function SourceTicketList({ sourceTickets, allTickets }) {
  const [showTooltip, setShowTooltip] = useState(false)
  const moreRef = useRef(null)
  const maxVisible = 5
  const visible = sourceTickets.slice(0, maxVisible)
  const remaining = sourceTickets.length - maxVisible

  const getTooltipPosition = () => {
    if (!moreRef.current) return { top: 0, left: 0 }
    const rect = moreRef.current.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2
    return { top: centerY, left: rect.left, transform: 'translate(calc(-100% - 12px), -50%)' }
  }

  const allSourceItems = sourceTickets.map(id => {
    const ticket = allTickets.find(t => t.id === id)
    return { id, subject: ticket?.subject || '' }
  })

  const columns = []
  for (let i = 0; i < allSourceItems.length; i += 5) {
    columns.push(allSourceItems.slice(i, i + 5))
  }

  return (
    <SourceListContainer>
      {visible.map(id => {
        const ticket = allTickets.find(t => t.id === id)
        if (!ticket) return null
        return (
          <SourceListItem key={id}>
            <StatusBadge $status={getTicketStatus(id)}>{getTicketStatus(id)[0]}</StatusBadge>
            <TicketBadge>#{id}</TicketBadge>
            <SourceSubject>{ticket.subject}</SourceSubject>
          </SourceListItem>
        )
      })}
      {remaining > 0 && (
        <>
          <MoreLink ref={moreRef} onClick={() => setShowTooltip(true)}>
            +{remaining} more
          </MoreLink>
          {showTooltip && (
            <TooltipOverlay onClick={() => setShowTooltip(false)}>
              <TooltipBox style={getTooltipPosition()} onClick={(e) => e.stopPropagation()}>
                <TooltipTitle>Source tickets</TooltipTitle>
                <TooltipColumns>
                  {columns.map((col, ci) => (
                    <TooltipColumn key={ci}>
                      {col.map(item => (
                        <TooltipItem key={item.id}>
                          <TooltipBadge>#{item.id}</TooltipBadge>
                          {item.subject}
                        </TooltipItem>
                      ))}
                    </TooltipColumn>
                  ))}
                </TooltipColumns>
              </TooltipBox>
            </TooltipOverlay>
          )}
        </>
      )}
    </SourceListContainer>
  )
}

function MergeDrawer({ sourceTickets, onClose, onMerge, embedded, onTitleClick, previousTicketId }) {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState(null)
  const [selectedCustom, setSelectedCustom] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [inputError, setInputError] = useState(null)
  const inputRef = useRef(null)
  const [hoveredTicket, setHoveredTicket] = useState(null)
  const [hoverPos, setHoverPos] = useState({ top: 0, left: 0 })
  const hoverTimeout = useRef(null)


  const [closeComment, setCloseComment] = useState('')
  const [destComment, setDestComment] = useState('')
  const [closeType, setCloseType] = useState('public')
  const [destType, setDestType] = useState('internal')

  const sourceBrands = sourceTickets.map(id => allTickets.find(t => t.id === id)?.brand).filter(Boolean)
  const sourceBrand = sourceBrands[0]
  const sourceOrgs = sourceTickets.map(id => allTickets.find(t => t.id === id)?.org).filter(Boolean)
  const sourceOrg = sourceOrgs[0]

  const selectedTicket = selected
    ? suggestions.find(t => t.id === selected) || { id: selected, title: selectedCustom }
    : null

  const checkBrandMismatch = (ticketId) => {
    const ticket = allTickets.find(t => t.id === ticketId)
    return ticket && sourceBrand && ticket.brand !== sourceBrand
  }

  const checkOrgMismatch = (ticketId) => {
    const ticket = allTickets.find(t => t.id === ticketId)
    return ticket && sourceOrg && ticket.org !== sourceOrg
  }

  const showOrgWarning = selected && !checkBrandMismatch(selected) && checkOrgMismatch(selected)

  const getFilteredTickets = () => {
    const val = searchValue.trim()
    if (!val) return allTickets.filter(t => t.id >= 13 && t.id <= 18 && !sourceTickets.includes(t.id))

    const available = allTickets.filter(t => !sourceTickets.includes(t.id))

    if (val.startsWith('#')) {
      const numPart = val.slice(1)
      if (!numPart) return available.slice(0, 8)
      return available.filter(t => String(t.id).startsWith(numPart)).slice(0, 8)
    }

    const lower = val.toLowerCase()
    const scored = available
      .map(t => {
        const subjectLower = t.subject.toLowerCase()
        let score = 0
        if (subjectLower === lower) score = 100
        else if (subjectLower.startsWith(lower)) score = 80
        else if (subjectLower.includes(lower)) score = 60
        else {
          const words = lower.split(' ')
          const matchCount = words.filter(w => subjectLower.includes(w)).length
          score = (matchCount / words.length) * 40
        }
        if (String(t.id).includes(val)) score = Math.max(score, 50)
        return { ...t, score }
      })
      .filter(t => t.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)

    return scored
  }

  const filteredTickets = getFilteredTickets()

  const handleCardClick = (id) => {
    if (selected === id) {
      setSelected(null)
      setSelectedCustom(null)
      setInputError(null)
    } else {
      if (checkBrandMismatch(id)) {
        setInputError('brand')
      } else {
        setInputError(null)
      }
      setSelected(id)
      setSelectedCustom(null)
      setSearchValue('')
      setShowDropdown(false)
    }
  }

  const handleDropdownSelect = (ticket) => {
    if (checkBrandMismatch(ticket.id)) {
      setInputError('brand')
    } else {
      setInputError(null)
    }
    setSelected(ticket.id)
    setSelectedCustom(ticket.subject)
    setSearchValue('')
    setShowDropdown(false)
  }

  const handleClear = () => {
    setSelected(null)
    setSelectedCustom(null)
    setSearchValue('')
    setShowDropdown(false)
    setInputError(null)
    inputRef.current?.focus()
  }

  const plural = sourceTickets.length > 1

  const handleNext = () => {
    if (step === 1) {
      if (!selectedTicket) {
        setInputError('empty')
        return
      }
      if (inputError === 'brand') return
      const destTitle = selectedTicket.title || selectedCustom
      const destId = selectedTicket.id
      const ticketWord = plural ? 'These tickets were' : 'This ticket was'
      const ticketClose = plural ? 'These tickets are' : 'This ticket is'
      setCloseComment(`${ticketWord} merged into #${destId} ${destTitle}. ${ticketClose} now closed.`)
      const sourceRefs = sourceTickets.map(id => {
        const t = allTickets.find(tk => tk.id === id)
        return `#${id}${t ? ' ' + t.subject : ''}`
      }).join(', ')
      setDestComment(`This ticket now includes merged content from ${sourceRefs}.`)
      setStep(2)
    } else {
      onMerge()
    }
  }

  const visibleSuggestions = (() => {
    const filtered = suggestions.filter(t => !sourceTickets.includes(t.id))
    if (previousTicketId && !filtered.find(t => t.id === previousTicketId)) {
      const prevTicket = allTickets.find(t => t.id === previousTicketId)
      if (prevTicket) {
        filtered.unshift({ id: prevTicket.id, title: prevTicket.subject, requester: 'Rodrigo De Conceição', date: 'May 5, 2026' })
      }
    } else if (previousTicketId) {
      const idx = filtered.findIndex(t => t.id === previousTicketId)
      if (idx > 0) {
        const [item] = filtered.splice(idx, 1)
        filtered.unshift(item)
      }
    }
    return filtered.slice(0, 10)
  })()

  const drawerContent = (
    <>
      <DrawerHeader>
        <DrawerTitle>Merge tickets</DrawerTitle>
        <CloseButton onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
          </svg>
        </CloseButton>
      </DrawerHeader>

        <DrawerBody>
          {/* Step 1 */}
          <StepRow>
            <StepIndicator>
              <StepCircle $active={step === 1} $completed={step > 1}>
                {step > 1 ? (
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8.5l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : '1'}
              </StepCircle>
              <StepLine />
            </StepIndicator>
            <StepContent>
              <StepTitle $active={step >= 1}>Select destination ticket</StepTitle>

              {step === 1 && (
                <>
                  <SectionLabel>Source ticket{sourceTickets.length > 1 ? 's' : ''}</SectionLabel>
                  <SourceTicketList
                    sourceTickets={sourceTickets}
                    allTickets={allTickets}
                  />

                  <FieldLabel>Destination ticket* (required)</FieldLabel>
                  <FieldHint>Search for a specific ticket or select a suggested ticket</FieldHint>
                  <InputContainer>
                    <InputWrapper $error={!!inputError} onClick={() => !selected && inputRef.current?.focus()}>
                      {selectedTicket ? (
                        <>
                          <InputBadge>#{selectedTicket.id}</InputBadge>
                          <InputTicketName>{selectedTicket.title || selectedCustom}</InputTicketName>
                          <ClearButton onClick={handleClear}>×</ClearButton>
                        </>
                      ) : (
                        <SearchInput
                          ref={inputRef}
                          type="text"
                          value={searchValue}
                          onChange={(e) => {
                            setSearchValue(e.target.value)
                            setShowDropdown(e.target.value.trim().length > 0)
                          }}
                          onFocus={() => setShowDropdown(true)}
                          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                          placeholder=""
                        />
                      )}
                    </InputWrapper>
                    {showDropdown && filteredTickets.length > 0 && (
                      <Dropdown>
                        {filteredTickets.map(ticket => (
                          <DropdownItem key={ticket.id} onMouseDown={() => handleDropdownSelect(ticket)}>
                            <DropdownBadge>#{ticket.id}</DropdownBadge>
                            {ticket.subject}
                          </DropdownItem>
                        ))}
                      </Dropdown>
                    )}
                    {inputError === 'empty' && (
                      <InputError>
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="8.5" stroke="#cc3340" strokeWidth="1.5"/>
                          <path d="M10 6v5" stroke="#cc3340" strokeWidth="1.5" strokeLinecap="round"/>
                          <circle cx="10" cy="14" r="1" fill="#cc3340"/>
                        </svg>
                        Search for a ticket or select a suggested ticket
                      </InputError>
                    )}
                    {inputError === 'brand' && (
                      <InputError>
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="8.5" stroke="#cc3340" strokeWidth="1.5"/>
                          <path d="M10 6v5" stroke="#cc3340" strokeWidth="1.5" strokeLinecap="round"/>
                          <circle cx="10" cy="14" r="1" fill="#cc3340"/>
                        </svg>
                        Can't merge different brands
                      </InputError>
                    )}
                  </InputContainer>

                  {showOrgWarning && (
                    <OrgWarningWell>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                        <path d="M10 2L1 18h18L10 2z" stroke="#ac5918" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M10 8v4" stroke="#ac5918" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="10" cy="15" r="1" fill="#ac5918"/>
                      </svg>
                      <OrgWarningText>These tickets belong to different organizations</OrgWarningText>
                    </OrgWarningWell>
                  )}

                  <SuggestionsLabel>{visibleSuggestions.length} Suggestions</SuggestionsLabel>
                  <SuggestionsGrid>
                    {visibleSuggestions.map(ticket => (
                      <SuggestionCard
                        key={ticket.id}
                        $active={selected === ticket.id}
                        onClick={() => handleCardClick(ticket.id)}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect()
                          hoverTimeout.current = setTimeout(() => {
                            setHoveredTicket(ticket)
                            setHoverPos({ top: rect.top + rect.height / 2, left: rect.left })
                          }, 400)
                        }}
                        onMouseLeave={() => {
                          clearTimeout(hoverTimeout.current)
                          setHoveredTicket(null)
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <StatusBadge $status={getTicketStatus(ticket.id)}>{getTicketStatus(ticket.id)[0]}</StatusBadge>
                          <CardBadge>#{ticket.id}</CardBadge>
                        </span>
                        <CardTitle onClick={(e) => {
                          e.stopPropagation()
                          onTitleClick?.(ticket)
                        }}>{ticket.title}</CardTitle>
                        <CardMeta>{ticket.requester}</CardMeta>
                        <CardMeta>{ticket.date}</CardMeta>
                      </SuggestionCard>
                    ))}
                  </SuggestionsGrid>
                  {hoveredTicket && (
                    <HoverCard style={{ top: hoverPos.top, left: hoverPos.left }}>
                      <HoverCardHeader>
                        <HoverCardAvatar />
                        <HoverCardHeaderText>
                          <HoverCardTitle>{hoveredTicket.title}</HoverCardTitle>
                          <HoverCardRequester>{hoveredTicket.requester}</HoverCardRequester>
                        </HoverCardHeaderText>
                      </HoverCardHeader>
                      <HoverCardBody>
                        <HoverCardBadgeRow>
                          <HoverCardOpenBadge>Open</HoverCardOpenBadge>
                          <HoverCardTicketNum>Ticket #{hoveredTicket.id}</HoverCardTicketNum>
                        </HoverCardBadgeRow>
                        <HoverCardSubject>{hoveredTicket.title}</HoverCardSubject>
                        <HoverCardCommentLabel>Latest comment</HoverCardCommentLabel>
                        <HoverCardComment>
                          <div>
                            <HoverCardAuthor>Rusty Admin</HoverCardAuthor>
                            <HoverCardCommentText>{hoveredTicket.title.toLowerCase()}</HoverCardCommentText>
                          </div>
                          <HoverCardDate>{hoveredTicket.date?.split(',')[0]}</HoverCardDate>
                        </HoverCardComment>
                      </HoverCardBody>
                    </HoverCard>
                  )}
                </>
              )}
            </StepContent>
          </StepRow>

          {/* Step 2 */}
          <StepRow>
            <StepIndicator>
              <StepCircle $active={step >= 2}>2</StepCircle>
            </StepIndicator>
            <StepContent>
              <StepTitle $active={step >= 2}>Review merge</StepTitle>

              {step === 2 && (
                <>
                  <Step2Section>
                    <Step2Label>Source ticket{plural ? 's' : ''}</Step2Label>
                    <Step2Hint>{plural ? 'These tickets' : 'This ticket'} will close with this comment</Step2Hint>
                    <Step2BadgeRow>
                      {sourceTickets.map(id => (
                        <TicketBadge key={id}>#{id}</TicketBadge>
                      ))}
                    </Step2BadgeRow>
                    <ComposerBox
                      value={closeComment}
                      onChange={setCloseComment}
                      type={closeType}
                      onTypeChange={setCloseType}
                    />
                  </Step2Section>

                  <Step2Section>
                    <Step2Label>Destination ticket</Step2Label>
                    <Step2Hint>This ticket will receive this comment</Step2Hint>
                    <Step2BadgeRow>
                      <TicketBadge>#{selectedTicket?.id}</TicketBadge>
                    </Step2BadgeRow>
                    <ComposerBox
                      value={destComment}
                      onChange={setDestComment}
                      type={destType}
                      onTypeChange={setDestType}
                    />
                  </Step2Section>
                </>
              )}
            </StepContent>
          </StepRow>
        </DrawerBody>

      <DrawerFooter>
        <CancelBtn onClick={step === 2 ? () => setStep(1) : onClose}>
          {step === 2 ? 'Back' : 'Cancel'}
        </CancelBtn>
        <NextBtn onClick={handleNext}>
          {step === 1 ? 'Next' : 'Merge tickets'}
        </NextBtn>
      </DrawerFooter>
    </>
  )

  if (embedded) {
    return drawerContent
  }

  return (
    <>
      <Scrim onClick={onClose} />
      <Drawer>{drawerContent}</Drawer>
    </>
  )
}

const Step2Section = styled.div`
  margin-top: 16px;
`

const Step2Label = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const Step2Hint = styled.p`
  font-size: 14px;
  color: #68737d;
  margin: 0;
`

const Step2BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 0;
`

const ComposerContainer = styled.div`
  border: 1px solid #d8dcde;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const ComposerHeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  background: ${props => props.$note ? '#fff8ed' : '#fff'};
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
  position: relative;
`

const ComposerTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: inherit;
  resize: none;
  color: #2f3941;
  background: ${props => props.$note ? '#fff8ed' : '#fff'};
  box-sizing: border-box;
`

const ComposerToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 12px;
  background: ${props => props.$note ? '#fff8ed' : '#fff'};
  border-top: ${props => props.$note ? 'none' : '1px solid #e9ebed'};
`

const ToolbarIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #87929d;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`

const ComposerDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 12px;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 140px;
`

const ComposerDropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;

  &:hover {
    background: #edf7ff;
  }
`

function ComposerBox({ value, onChange, type, onTypeChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isNote = type === 'internal'

  return (
    <ComposerContainer>
      <ComposerHeaderRow $note={isNote} onClick={() => setMenuOpen(!menuOpen)}>
        {isNote ? (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#68737d" strokeWidth="1.5">
            <rect x="3" y="3" width="14" height="14" rx="2"/>
            <path d="M7 7h6M7 10h6M7 13h4"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#68737d" strokeWidth="1.5">
            <path d="M4 10l6-6v4c6 0 8 3 8 8-2-3-4-4-8-4v4l-6-6z" strokeLinejoin="round"/>
          </svg>
        )}
        {isNote ? 'Internal note' : 'Public reply'}
        <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="#68737d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {menuOpen && (
          <ComposerDropdownMenu>
            <ComposerDropdownItem onClick={(e) => { e.stopPropagation(); onTypeChange('public'); setMenuOpen(false) }}>Public reply</ComposerDropdownItem>
            <ComposerDropdownItem onClick={(e) => { e.stopPropagation(); onTypeChange('internal'); setMenuOpen(false) }}>Internal note</ComposerDropdownItem>
          </ComposerDropdownMenu>
        )}
      </ComposerHeaderRow>
      <ComposerTextarea
        $note={isNote}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <ComposerToolbar $note={isNote}>
        <ToolbarIcon>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 5v10M7 5h3.5a3 3 0 010 6H7M7 11h4a3 3 0 010 4H7"/>
          </svg>
        </ToolbarIcon>
        <ToolbarIcon>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="10" cy="10" r="7"/>
            <circle cx="7.5" cy="8.5" r="1" fill="currentColor" stroke="none"/>
            <circle cx="12.5" cy="8.5" r="1" fill="currentColor" stroke="none"/>
            <path d="M7 12.5c1 1.5 5 1.5 6 0"/>
          </svg>
        </ToolbarIcon>
        <ToolbarIcon>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5"/>
            <path d="M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5"/>
          </svg>
        </ToolbarIcon>
        <ToolbarIcon>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z"/>
            <path d="M4 13l2 2 8-8"/>
          </svg>
        </ToolbarIcon>
      </ComposerToolbar>
    </ComposerContainer>
  )
}

export default MergeDrawer
