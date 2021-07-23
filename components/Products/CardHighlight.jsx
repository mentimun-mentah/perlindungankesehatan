import { memo } from 'react'
import { Card } from 'react-bootstrap'

const CardHighlight = ({ data, onClick, hoverable }) => {
  return (
    <Card className={`${hoverable && 'hover-pointer'} shadow border-0 h-100 card-highlight`} onClick={onClick}>
      {data?.image && (
        <Card.Img variant="top" src={data?.image} className="card-highlight-image" />
      )}
      <Card.Body>
        <Card.Title className="font-weight-bold">{data?.title}</Card.Title>
        <Card.Text className="text-left">
          {data?.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default memo(CardHighlight)
