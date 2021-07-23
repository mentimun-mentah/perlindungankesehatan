import { Container, Card, Row, Col } from 'react-bootstrap'
import { WA_LINK } from 'data/product'

import Link from 'next/link'
import Button from 'antd-button-color'

import CardHighlight from 'components/Products/CardHighlight'
import style from 'components/Products/detailStyle'

const title = "PRUCritical Benefit 88"

const benefitsData = [
  {
    image: "/images/benefits/cinta-4.jpeg",
    title: "Perlindungan jangka panjang",
    description: "Melindungi s/d 88th dengan beragam pilihan pembayaran premi"
  },
  {
    image: "/images/benefits/cinta-3.jpeg",
    title: "Perlindungan komprehensif",
    description: "Perlindungan atas 60 kondisi kritis atau meninggal dunia"
  },
  {
    image: "/images/benefits/critical-3.jpeg",
    title: "Manfaat jatuh tempo*",
    description: "*100% UP di akhir masa perlindungan jika tertanggung masih hidup dan polis aktif"
  },
  {
    image: "/images/benefits/critical-4.jpeg",
    title: "200% tambahan dari UP",
    description: "Manfaat meninggal dunia karena kecelakaan sebelum 79 tahun"
  },
]

const ProductItem = () => {
  return (
    <>
      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p className="mb-2">
              <strong>Proteksi Terjamin, Uang Pasti Kembali</strong>
            </p>
              PRUCritical Benefit 88 merupakan produk asuransi jiwa tradisional yang memberikan perlindungan komprehensif atas risiko Kondisi Kritis atau meninggal dunia sampai dengan Tertanggung berusia 88 tahun dengan beragam pilihan masa pembayaran Premi hingga 15 tahun. PRUCritical Benefit 88 adalah solusi Anda untuk proteksi yang terjamin dan solusi rencana masa depan Anda. <br /> <br />

            <p className="mb-2">
              <strong>Proteksi Terjamin</strong>
            </p>
            PRUCritical Benefit 88 memberikan perlindungan berupa 100% Uang Pertanggungan (UP) jika Tertanggung mengalami salah satu dari 60 Kondisi Kritis tahap akhir atau meninggal dunia dan Polis akan berakhir. PRUCritical Benefit 88 juga memberikan perlindungan atas pelaksanaan perawatan Angioplasti sebesar 10% UP tanpa mengurangi UP PRUCritical Benefit 88. Manfaat Asuransi yang dibayarkan akan mengikuti ketentuan Polis PRUCritical Benefit 88. <br /> <br />

            <p className="mb-2">
              <strong>Uang Pasti Kembali</strong>
            </p>
            <p>
              Pembayaran 100% UP pada usia 88 tahun apabila Tertanggung masih hidup dan Polis tetap aktif.
            </p>
            <Link href={WA_LINK}>
              <a target="_blank">
                <Button
                  type="success"
                  size="large"
                  className="shadow-none"
                >
                  Info Selengkapnya
                </Button>
              </a>
            </Link>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">Highlights</h2>
          <Row className="justify-content-between">
            {benefitsData.map((data, i) => (
              <Col key={i} lg={3} md={6} className="col-12 mb-4">
                <CardHighlight data={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Card.Body className="py-0">
            <Row className="align-items-center justify-content-center">
              <Col sm={12} md={8}>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    allowFullScreen
                    className="embed-responsive-item bor-rad-10px"
                    src="https://www.youtube.com/embed/omAGeYdAf-0"
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem
