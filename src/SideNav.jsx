import styled from 'styled-components'

const Nav = styled.nav`
  width: 56px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
  gap: 2px;
  flex-shrink: 0;
  height: 100%;
`

const NavItem = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${props => props.$active ? '#2f3941' : 'transparent'};

  &:hover {
    background: ${props => props.$active ? '#2f3941' : '#ebebeb'};
  }

  svg {
    fill: ${props => props.$active ? '#fff' : '#68737d'};
  }
`

const BottomNav = styled.div`
  margin-top: auto;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function SideNav() {
  return (
    <Nav>
      {/* Home */}
      <NavItem>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M10 2.5L2 9h3v7h4v-4h2v4h4V9h3L10 2.5z"/>
        </svg>
      </NavItem>
      {/* Messaging/chat - active (rounded square with speech bubble) */}
      <NavItem $active>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M4 3h12a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 3v-3H4a2 2 0 01-2-2V5a2 2 0 012-2z"/>
        </svg>
      </NavItem>
      {/* People / customers */}
      <NavItem>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <circle cx="7" cy="6" r="3"/>
          <path d="M1 16c0-3.3 2.7-6 6-6s6 2.7 6 6H1z"/>
          <circle cx="14" cy="6.5" r="2.5"/>
          <path d="M19 16c0-2.8-2.2-5-5-5-.8 0-1.5.2-2.2.5C13.2 12.8 14 14.3 14 16h5z"/>
        </svg>
      </NavItem>
      {/* Building / organization */}
      <NavItem>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M3 17V4h6v3h5v10H3zm2-11v2h2V6H5zm0 3v2h2V9H5zm0 3v2h2v-2H5zm4 0v2h2v-2H9zm0-3v2h2V9H9z"/>
        </svg>
      </NavItem>
      {/* Reporting / bar chart */}
      <NavItem>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <rect x="2" y="11" width="3" height="6"/>
          <rect x="7" y="7" width="3" height="10"/>
          <rect x="12" y="3" width="3" height="14"/>
        </svg>
      </NavItem>
      {/* Person / single user */}
      <NavItem>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <circle cx="10" cy="6" r="3.5"/>
          <path d="M3 17c0-3.9 3.1-7 7-7s7 3.1 7 7H3z"/>
        </svg>
      </NavItem>
      {/* Grid / admin */}
      <NavItem>
        <svg width="18" height="18" viewBox="0 0 18 18">
          <rect x="1" y="1" width="5" height="5" rx="1"/>
          <rect x="8" y="1" width="5" height="5" rx="1"/>
          <rect x="15" y="1" width="2" height="5" rx="1"/>
          <rect x="1" y="8" width="5" height="5" rx="1"/>
          <rect x="8" y="8" width="5" height="5" rx="1"/>
          <rect x="15" y="8" width="2" height="5" rx="1"/>
          <rect x="1" y="15" width="5" height="2" rx="1"/>
          <rect x="8" y="15" width="5" height="2" rx="1"/>
          <rect x="15" y="15" width="2" height="2" rx="1"/>
        </svg>
      </NavItem>

      <BottomNav />
    </Nav>
  )
}

export default SideNav
