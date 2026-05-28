import { useState, useRef } from 'react'
import styled from 'styled-components'
import { Alert } from '@zendeskgarden/react-notifications'
import { Tooltip } from '@zendeskgarden/react-tooltips'

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

const SectionLabel = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 12px;
`

const SourceTicketGrid = styled.div`
  display: grid;
  grid-template-columns: 272px 272px;
  gap: 8px;
  margin-bottom: 36px;
`

const SourceTicketCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 4px 12px 4px 4px;
  width: 272px;
  height: 28px;
  box-sizing: border-box;
`

const SourceTicketName = styled.span`
  font-size: 14px;
  color: #2f3941;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TicketBadge = styled.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const FieldLabel = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px;
`

const FieldHint = styled.p`
  font-size: 14px;
  color: #68737d;
  margin: 0 0 12px;
`

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
`

const InputWrapper = styled.div`
  width: 100%;
  padding: 0 12px;
  border: 1px solid ${props => props.$error ? '#cc3340' : '#c2c8cc'};
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  cursor: text;

  &:focus-within {
    border-color: ${props => props.$error ? '#cc3340' : '#1f73b7'};
    box-shadow: 0 0 0 3px ${props => props.$error ? 'rgba(204, 51, 64, 0.15)' : 'rgba(31, 115, 183, 0.15)'};
  }
`

const InputBadge = styled.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
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
  font-size: 16px;
  padding: 0 4px;
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
  min-width: 60px;
  padding: 0;
`

const Dropdown = styled.div`
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 240px;
  overflow-y: auto;
  z-index: 10;
`

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;

  &:hover {
    background: #edf7ff;
  }
`

const DropdownBadge = styled.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  flex-shrink: 0;
`

const AlertWrapper = styled.div`
  margin-bottom: 16px;
  max-width: 630px;
`

const OrgWarningWell = styled.div`
  background: #fff3e4;
  border: 1px solid #fed6a9;
  border-radius: 4px;
  padding: 22px 40px 22px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const OrgWarningText = styled.span`
  font-size: 14px;
  color: #4c2c17;
  font-weight: 600;
`

const InputError = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #cc3340;
  margin-top: 8px;
`

const SuggestionsLabel = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #2f3941;
  margin-top: 16px;
  margin-bottom: 16px;
`

const SuggestionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-right: 40px;
`

const SuggestionCard = styled.div`
  position: relative;
  z-index: 1;
  border: 1.5px solid ${props => props.$active ? '#1f73b7' : '#b1c9e8'};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  background: ${props => props.$active ? '#edf7ff' : '#ffffff'};
  transition: border-color 0.15s, background 0.15s;
  width: 304px;
  height: 100px;
  box-sizing: border-box;

  &:hover {
    border-color: #1f73b7;
    background: ${props => props.$active ? '#edf7ff' : '#ffffff'};
  }
`

const CardTitle = styled.span`
  display: block;
  color: #1f73b7;
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0 8px;
  cursor: pointer;
`

const CardMeta = styled.span`
  font-size: 12px;
  color: #68737d;
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

const CancelButton = styled.button`
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

const NextButton = styled.button`
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

let nextCustomId = 100

function MergeTickets({ sourceTickets, onBack, onNext }) {
  const [selected, setSelected] = useState(null)
  const [selectedCustom, setSelectedCustom] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [inputError, setInputError] = useState(null)
  const [showAlert, setShowAlert] = useState(null)
  const [showOrgWarning, setShowOrgWarning] = useState(false)
  const inputRef = useRef(null)

  const sourceBrands = sourceTickets.map(id => allTickets.find(t => t.id === id)?.brand).filter(Boolean)
  const sourceBrand = sourceBrands[0]
  const sourceOrgs = sourceTickets.map(id => allTickets.find(t => t.id === id)?.org).filter(Boolean)
  const sourceOrg = sourceOrgs[0]

  const selectedTicket = selected
    ? suggestions.find(t => t.id === selected) || { id: selected, title: selectedCustom }
    : null

  const orgMismatch = selected
    ? (() => { const t = allTickets.find(t => t.id === selected); return t && sourceOrg && t.org !== sourceOrg })()
    : false

  const checkBrandMismatch = (ticketId) => {
    const ticket = allTickets.find(t => t.id === ticketId)
    if (ticket && sourceBrand && ticket.brand !== sourceBrand) {
      return true
    }
    return false
  }

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
      setShowAlert(null)
      setShowOrgWarning(false)
    } else {
      setSelected(id)
      setSelectedCustom(null)
      setSearchValue('')
      setShowDropdown(false)
      setInputError(null)
      setShowAlert(null)
      if (checkBrandMismatch(id)) {
        setInputError('brand')
        setShowAlert('brand')
        setShowOrgWarning(false)
      } else {
        const t = allTickets.find(t => t.id === id)
        setShowOrgWarning(t && sourceOrg && t.org !== sourceOrg)
      }
    }
  }

  const handleDropdownSelect = (ticket) => {
    setSelected(ticket.id)
    setSelectedCustom(ticket.subject)
    setSearchValue('')
    setShowDropdown(false)
    setInputError(null)
    setShowAlert(null)
    if (checkBrandMismatch(ticket.id)) {
      setInputError('brand')
      setShowAlert('brand')
      setShowOrgWarning(false)
    } else {
      const t = allTickets.find(t => t.id === ticket.id)
      setShowOrgWarning(t && sourceOrg && t.org !== sourceOrg)
    }
  }

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
    setShowDropdown(e.target.value.trim().length > 0)
  }

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      const customId = nextCustomId++
      setSelected(customId)
      setSelectedCustom(searchValue.trim())
      setSearchValue('')
      setShowDropdown(false)
    }
  }

  const handleClear = () => {
    setSelected(null)
    setSelectedCustom(null)
    setSearchValue('')
    setShowDropdown(false)
    setInputError(null)
    setShowAlert(null)
    setShowOrgWarning(false)
    inputRef.current?.focus()
  }

  return (
    <Container>
      <Content>
        <StepIndicator>
          <StepText>Step 1 of 2</StepText>
          <ProgressBar>
            <ProgressSegment $active />
            <ProgressSegment />
          </ProgressBar>
        </StepIndicator>

        <Title>Merge tickets</Title>
        <Subtitle>Consolidate related tickets into a primary or suggested ticket.</Subtitle>

        <SectionLabel>Source ticket{sourceTickets.length > 1 ? 's' : ''}</SectionLabel>
        <SourceTicketGrid>
          {sourceTickets.map(id => {
            const ticket = allTickets.find(t => t.id === id)
            if (!ticket) return null
            return (
              <Tooltip key={id} content={ticket.subject} placement="top" delayMS={300}>
                <SourceTicketCard>
                  <TicketBadge>#{id}</TicketBadge>
                  <SourceTicketName>{ticket.subject}</SourceTicketName>
                </SourceTicketCard>
              </Tooltip>
            )
          })}
        </SourceTicketGrid>

        {showOrgWarning && (
          <AlertWrapper>
            <OrgWarningWell>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8.5" stroke="#ac5918" strokeWidth="1.5"/>
                <path d="M10 6v5" stroke="#ac5918" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="10" cy="14" r="1" fill="#ac5918"/>
              </svg>
              <OrgWarningText>These tickets belong to different organizations</OrgWarningText>
            </OrgWarningWell>
          </AlertWrapper>
        )}

        {showAlert === 'empty' && (
          <AlertWrapper>
            <Alert type="error">
              <Alert.Title>Can't advance</Alert.Title>
              <Alert.Paragraph>Search for a destination ticket or choose a suggestion to continue to the next step.</Alert.Paragraph>
              <Alert.Close aria-label="Close" onClick={() => setShowAlert(null)} />
            </Alert>
          </AlertWrapper>
        )}

        {showAlert === 'brand' && (
          <AlertWrapper>
            <Alert type="error">
              <Alert.Title>Can't merge different brands</Alert.Title>
              <Alert.Paragraph>Select a ticket from the same brand.</Alert.Paragraph>
              <Alert.Close aria-label="Close" onClick={() => setShowAlert(null)} />
            </Alert>
          </AlertWrapper>
        )}

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
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
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
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8.5" stroke="#cc3340" strokeWidth="1.5"/>
                <path d="M10 6v5" stroke="#cc3340" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="10" cy="14" r="1" fill="#cc3340"/>
              </svg>
              Search for a ticket or select a suggested ticket
            </InputError>
          )}
          {inputError === 'brand' && (
            <InputError>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8.5" stroke="#cc3340" strokeWidth="1.5"/>
                <path d="M10 6v5" stroke="#cc3340" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="10" cy="14" r="1" fill="#cc3340"/>
              </svg>
              Can't merge different brands
            </InputError>
          )}
        </InputContainer>

        <SuggestionsLabel>{Math.min(suggestions.filter(t => !sourceTickets.includes(t.id)).length, 10)} Suggestions</SuggestionsLabel>
        <SuggestionsGrid>
          {suggestions.filter(t => !sourceTickets.includes(t.id)).slice(0, 10).map(ticket => (
            <SuggestionCard
              key={ticket.id}
              $active={selected === ticket.id}
              onClick={() => handleCardClick(ticket.id)}
            >
              <TicketBadge>#{ticket.id}</TicketBadge>
              <CardTitle>{ticket.title}</CardTitle>
              <CardMeta>{ticket.requester} &bull; {ticket.date}</CardMeta>
            </SuggestionCard>
          ))}
        </SuggestionsGrid>
      </Content>

      <Footer>
        <CancelButton onClick={onBack}>Cancel</CancelButton>
        <NextButton onClick={() => {
          if (!selectedTicket) {
            setInputError('empty')
            setShowAlert('empty')
            return
          }
          if (inputError === 'brand') {
            setShowAlert('brand')
            return
          }
          onNext({ id: selectedTicket.id, title: selectedTicket.title || selectedCustom })
        }}>Next</NextButton>
      </Footer>
    </Container>
  )
}

export default MergeTickets
