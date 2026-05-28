import styled from 'styled-components'

const Bar = styled.header`
  height: 48px;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
  flex-shrink: 0;
`

const ZendeskLogo = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
`

const ProductName = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #2f3941;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

const ChevronDown = styled.svg`
  width: 12px;
  height: 12px;
`

const AccountName = styled.span`
  color: #2f3941;
  font-size: 14px;
  font-weight: 400;
  margin-left: 8px;
`

const Spacer = styled.div`
  flex: 1;
`

const SearchBox = styled.div`
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 220px;
`

const SearchText = styled.span`
  color: #87929d;
  font-size: 13px;
`

const IconButton = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  background: linear-gradient(135deg, #a855f7, #6366f1);
`

function TopBar() {
  return (
    <Bar>
      <ZendeskLogo viewBox="0 0 26 26" fill="none">
        <path d="M12.7 0.5H0.5v12.2L12.7 0.5z" fill="#2f3941"/>
        <path d="M12.7 25.5V13.3L0.5 25.5h12.2z" fill="#2f3941"/>
        <path d="M13.3 25.5h12.2V13.3L13.3 25.5z" fill="#2f3941"/>
        <path d="M13.3 0.5v12.2l12.2-12.2H13.3z" fill="#2f3941"/>
      </ZendeskLogo>
      <ProductName>
        Support
        <ChevronDown viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5l3 3 3-3" stroke="#2f3941" strokeWidth="1.5" strokeLinecap="round"/>
        </ChevronDown>
      </ProductName>
      <AccountName>Rusteze</AccountName>
      <Spacer />
      <SearchBox>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="#87929d">
          <path d="M6.5 1a5.5 5.5 0 014.38 8.82l3.65 3.66a.75.75 0 01-1.06 1.06l-3.66-3.65A5.5 5.5 0 116.5 1zm0 1.5a4 4 0 100 8 4 4 0 000-8z"/>
        </svg>
        <SearchText>Search admin center</SearchText>
      </SearchBox>
      <IconButton>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
          <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" fill="#1f73b7"/>
          <path d="M12.5 9.5l.75 1.5 1.5.75-1.5.75-.75 1.5-.75-1.5-1.5-.75 1.5-.75z" fill="#1f73b7"/>
        </svg>
      </IconButton>
      <IconButton>
        <svg width="18" height="18" viewBox="0 0 16 16" fill="#68737d">
          <path d="M1 1h6v6H1V1zm8 0h6v6H9V1zM1 9h6v6H1V9zm8 0h6v6H9V9z"/>
        </svg>
      </IconButton>
      <Avatar />
    </Bar>
  )
}

export default TopBar
