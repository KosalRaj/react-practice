import { Wrapper } from './Badge.styles'

type Props = {
  badgeContent: number;
}

const Badge: React.FC<Props> = ({ badgeContent }) => {
  return (
    <Wrapper>
      {badgeContent}
    </Wrapper>
  )
}


export default Badge;