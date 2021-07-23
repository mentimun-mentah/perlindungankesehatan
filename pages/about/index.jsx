import { useRouter } from 'next/router'
import { Row, Col, Card, Container } from 'react-bootstrap'

import { aboutUsMenuData } from "data/navbar";

const About = () => {
  const router = useRouter()
  return(
    <>
      <section>
        <Container>
          <h3 className="fs-20-s mb-4">Layanan Kami</h3>
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {aboutUsMenuData.map((data, i) => (
              <Col key={i} className="mt-3">
                <Card className="h-100 product-item hover-pointer" 
                  onClick={data.link ? () => router.push(`/about/${data.link}`) : () => router.push('http://payment.prudential.co.id/')}
                >
                  <Card.Body className='text-center'>
                    <p className="mb-2">
                      <i className={`fa-2x ${data.icon}`} />
                    </p>
                    <b>{data.label}</b>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{`
        :global(.product-item){
          border-radius: 4px;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
          transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        }

        :global(.product-item:hover){
          transform: scale(1.01);
          box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        }
      `}</style>
    </>
  )
}

export default About
