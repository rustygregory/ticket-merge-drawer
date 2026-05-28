import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;
  animation: ${slideIn} 0.2s ease-out;
`

const Toast = styled.div`
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  min-width: 260px;
`

const CheckIcon = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`

const Message = styled.span`
  font-size: 14px;
  color: #038153;
  font-weight: 600;
  flex: 1;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 16px;
  padding: 0;
  margin-left: 12px;

  &:hover {
    color: #2f3941;
  }
`


function Notification({ ticketCount, onClose }) {
  const message = ticketCount > 1
    ? 'Tickets successfully merged'
    : 'Ticket successfully merged'

  return (
    <Wrapper>
      <Toast>
        <CheckIcon>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="#038153" strokeWidth="1.5"/>
            <path d="M6 10l3 3 5-5" stroke="#038153" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </CheckIcon>
        <Message>{message}</Message>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Toast>
    </Wrapper>
  )
}

export default Notification
