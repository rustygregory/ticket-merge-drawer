import styled from 'styled-components'
import TopBar from './TopBar'
import SideNav from './SideNav'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`

const Body = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  background: #f7f7f7;
`

const Main = styled.main`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 24px;
  background: #fff;
  box-shadow: -2px -2px 8px rgba(0, 0, 0, 0.04);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(200, 180, 240, 0.25) 0%, rgba(220, 200, 255, 0.1) 40%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
`

function Shell({ children }) {
  return (
    <Wrapper>
      <TopBar />
      <Body>
        <SideNav />
        <Main>{children}</Main>
      </Body>
    </Wrapper>
  )
}

export default Shell
