import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`

const Sidebar = styled.div`
  width: 332px;
  border-right: 1px solid #e9ebed;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  flex-shrink: 0;
  overflow-y: auto;
`

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 16px;
`

const SidebarTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`

const SidebarIcons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const SidebarIcon = styled.span`
  color: #68737d;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
`

const ViewItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  color: #2f3941;
  background: ${props => props.$active ? '#edf7ff' : 'transparent'};
  font-weight: ${props => props.$active ? '600' : '400'};

  &:hover {
    background: ${props => props.$active ? '#edf7ff' : '#f5f5f5'};
  }
`

const ViewCount = styled.span`
  font-size: 12px;
  color: #68737d;
`

const SidebarBottom = styled.div`
  margin-top: auto;
  padding: 16px;
  border-top: 1px solid #e9ebed;
`

const SidebarBottomItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 13px;
  color: #2f3941;
`

const SidebarDivider = styled.div`
  border-top: 1px solid #e9ebed;
  margin: 8px 0;
`

const ManageLink = styled.a`
  font-size: 13px;
  color: #1f73b7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Header = styled.div`
  padding: 24px 32px 0;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: #2f3941;
  margin: 0;
`

const HeaderActions = styled.div`
  display: flex;
  gap: 8px;
`

const ActionsButton = styled.button`
  background: #fff;
  border: 1px solid #c2c8cc;
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #f5f5f5;
  }
`

const PlayButton = styled.button`
  background: #fff;
  border: 1px solid #c2c8cc;
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #f5f5f5;
  }
`

const FilterButton = styled.button`
  background: #fff;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  padding: 5px 12px;
  font-size: 13px;
  color: #1f73b7;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #f5faff;
  }
`

const TicketCount = styled.span`
  font-size: 13px;
  color: #68737d;
  margin-top: 12px;
  display: block;
`

const TableWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 32px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
`

const Th = styled.th`
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  color: #2f3941;
  padding: 10px 8px;
  border-bottom: 1px solid #e9ebed;
  white-space: nowrap;
`

const Tr = styled.tr`
  background: ${props => props.$selected ? '#edf7ff' : 'transparent'};

  &:hover {
    background: ${props => props.$selected ? '#edf7ff' : '#fafafa'};
  }
`

const Td = styled.td`
  padding: 10px 8px;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
`

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
`

const StatusBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  background: ${props => props.$status === 'Open' ? '#e35b51' : '#f79a3e'};
  text-transform: capitalize;
`

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 16px;
  padding: 4px;
`

const ActionBar = styled.div`
  border-top: 1px solid #e9ebed;
  padding: 0 32px;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fff;
  flex-shrink: 0;
`

const ActionBarCount = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
`

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #1f73b7;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 4px;

  &:hover {
    background: #f3f4f6;
  }
`

const CancelButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #1f73b7;
  margin-left: auto;
  padding: 6px 10px;

  &:hover {
    text-decoration: underline;
  }
`

const tickets = [
  { id: 23, subject: 'Refund merch', status: 'Open', requester: 'Rodrigo De Conceição', date: 'May 05' },
  { id: 22, subject: 'Refund that merch', status: 'Open', requester: 'Rodrigo De Conceição', date: 'May 05' },
  { id: 21, subject: 'Refund all merch', status: 'Open', requester: 'Rodrigo De Conceição', date: 'May 05' },
  { id: 20, subject: 'Refund my merch', status: 'Open', requester: 'Rodrigo De Conceição', date: 'May 05' },
  { id: 19, subject: 'Refund the merch', status: 'Open', requester: 'Rodrigo De Conceição', date: 'May 05' },
  { id: 18, subject: 'PDF test', status: 'New', requester: 'James Bond', date: 'May 04' },
  { id: 17, subject: 'Refund on merch', status: 'New', requester: 'Rusty Admin', date: 'Apr 20' },
  { id: 16, subject: 'PDF preview test', status: 'New', requester: 'W. Customer Wilson', date: 'Jan 27' },
  { id: 15, subject: 'Checking in on Dinoco product', status: 'New', requester: 'Gus Gus', date: 'Jan 23' },
  { id: 14, subject: 'Return order', status: 'New', requester: 'Gus Gus', date: 'Jan 23' },
  { id: 13, subject: 'Refund issues', status: 'New', requester: 'W. Customer Wilson', date: 'Nov 13, 2025' },
]

function Views({ selectedTickets, setSelectedTickets, mergedTickets = [], onMerge }) {
  const visibleTickets = tickets.filter(t => !mergedTickets.includes(t.id))
  const allSelected = visibleTickets.length > 0 && selectedTickets.length === visibleTickets.length

  const toggleAll = () => {
    if (allSelected) {
      setSelectedTickets([])
    } else {
      setSelectedTickets(visibleTickets.map(t => t.id))
    }
  }

  const toggleTicket = (id) => {
    if (selectedTickets.includes(id)) {
      setSelectedTickets(selectedTickets.filter(t => t !== id))
    } else {
      setSelectedTickets([...selectedTickets, id])
    }
  }

  return (
    <Container>
      <Sidebar>
        <SidebarHeader>
          <SidebarTitle>Views</SidebarTitle>
          <SidebarIcons>
            <SidebarIcon>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
                <path d="M8 3v10M3 8h10" strokeLinecap="round"/>
              </svg>
            </SidebarIcon>
            <SidebarIcon>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#68737d" strokeWidth="1.5">
                <path d="M2 8a6 6 0 0111.5-2.5M14 8a6 6 0 01-11.5 2.5" strokeLinecap="round"/>
                <path d="M14 3v2.5h-2.5M2 13v-2.5h2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SidebarIcon>
          </SidebarIcons>
        </SidebarHeader>
        <ViewItem>Your unsolved tickets <ViewCount>0</ViewCount></ViewItem>
        <ViewItem $active>Unassigned tickets <ViewCount>11</ViewCount></ViewItem>
        <ViewItem>All unsolved tickets <ViewCount>11</ViewCount></ViewItem>
        <ViewItem>Recently updated tickets <ViewCount>0</ViewCount></ViewItem>
        <ViewItem>Pending tickets <ViewCount>0</ViewCount></ViewItem>
        <ViewItem>Recently solved tickets <ViewCount>0</ViewCount></ViewItem>

        <SidebarBottom>
          <SidebarBottomItem>Suspended tickets <ViewCount>0</ViewCount></SidebarBottomItem>
          <SidebarBottomItem>Deleted tickets <ViewCount>0</ViewCount></SidebarBottomItem>
          <SidebarBottomItem>Suspended users</SidebarBottomItem>
          <SidebarDivider />
          <ManageLink href="#">Manage customer lists ↗</ManageLink>
        </SidebarBottom>
      </Sidebar>

      <MainContent>
        <Header>
          <TitleRow>
            <PageTitle>Unassigned tickets</PageTitle>
            <HeaderActions>
              <ActionsButton>Actions ▾</ActionsButton>
              <PlayButton>▶ Play</PlayButton>
            </HeaderActions>
          </TitleRow>
          <FilterButton>☰ Filter</FilterButton>
          <TicketCount>{visibleTickets.length} tickets</TicketCount>
        </Header>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th style={{ width: 40 }}>
                  <Checkbox
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                  />
                </Th>
                <Th>Ticket status</Th>
                <Th>Subject ⇅</Th>
                <Th>Requester</Th>
                <Th>Requested ↓</Th>
                <Th>Priority ⇅</Th>
                <Th style={{ width: 32 }}></Th>
              </tr>
            </thead>
            <tbody>
              {visibleTickets.map(ticket => (
                <Tr key={ticket.id} $selected={selectedTickets.includes(ticket.id)}>
                  <Td>
                    <Checkbox
                      type="checkbox"
                      checked={selectedTickets.includes(ticket.id)}
                      onChange={() => toggleTicket(ticket.id)}
                    />
                  </Td>
                  <Td><StatusBadge $status={ticket.status}>{ticket.status}</StatusBadge></Td>
                  <Td>{ticket.subject}</Td>
                  <Td>{ticket.requester}</Td>
                  <Td>{ticket.date}</Td>
                  <Td></Td>
                  <Td><MoreButton>⋮</MoreButton></Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        {selectedTickets.length > 0 && (
          <ActionBar>
            <ActionBarCount>{selectedTickets.length} tickets</ActionBarCount>
            <ActionButton>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#1f73b7" strokeWidth="1.5">
                <path d="M11.5 1.5l3 3-9 9H2.5v-3l9-9z" strokeLinejoin="round"/>
              </svg>
              Edit
            </ActionButton>
            <ActionButton onClick={onMerge}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#1f73b7" strokeWidth="1.5">
                <path d="M8 2v10" strokeLinecap="round"/>
                <path d="M5.5 4.5L8 2l2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12c-2 0-3 1-4.5 3" strokeLinecap="round"/>
                <path d="M8 12c2 0 3 1 4.5 3" strokeLinecap="round"/>
              </svg>
              Merge
            </ActionButton>
            <ActionButton>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#1f73b7" strokeWidth="1.5">
                <path d="M8 1.5L1.5 12.5h13L8 1.5z" strokeLinejoin="round"/>
                <path d="M8 6v3" strokeLinecap="round"/>
                <circle cx="8" cy="11" r="0.5" fill="#1f73b7" stroke="none"/>
              </svg>
              Mark as spam
            </ActionButton>
            <ActionButton>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#1f73b7" strokeWidth="1.5">
                <path d="M2 4h12M5.5 4V2.5h5V4M6 7v5M10 7v5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 4l.5 10h8l.5-10" strokeLinejoin="round"/>
              </svg>
              Delete
            </ActionButton>
            <CancelButton onClick={() => setSelectedTickets([])}>Cancel</CancelButton>
          </ActionBar>
        )}
      </MainContent>
    </Container>
  )
}

export default Views
