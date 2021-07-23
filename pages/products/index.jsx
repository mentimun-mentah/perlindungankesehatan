import { Image } from 'antd'
import { useRouter } from 'next/router'
import { Row, Col, Container } from 'react-bootstrap'

import { proteksi_kesehatan, proteksi_penghasilan, persiapan_dana_waris, persiapan_dana_pendidikan_anak } from 'data/product'

import CardProduct from 'components/Products/CardHighlight'


const Products = () => {
  const router = useRouter()

  return (
    <>
      <section className="product-section">
        <Container className="product-container">
          <Row className="mb-4">
            <Col sm={12} md={12} lg={12}>
              <div className="title-group-product-sticky">
                <h3 className="fs-22-s title-group-product">Proteksi Kesehatan</h3>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Image src="/images/health-insurance.jpeg" preview={false} alt="health insurance" className="bor-rad-10px" />
            </Col>
            <Col sm={12} md={6} lg={8}>
              <p className="text-justify">
                Alasan nomor satu memiliki asuransi kesehatan adalah biaya pengobatan. Dalam keadaan darurat, asuransi akan menanggung semua biaya medis. Banyak rumah sakit kini menawarkan fasilitas cashless dengan asuransi kesehatan. <br /> <br />
                Jadi, tidak perlu khawatir tentang keadaan darurat kesehatan yang tidak terduga di masa mendatang. Ini akan melindungi diri Anda dengan cara terbaik. <br /> <br />
                Melindungi Kesehatan Anda berarti melindungi orang yang anda Cintai. Temukan Produk Asuransi Kesehatan kami yang sesuai dengan kebutuhan Anda.
              </p>
            </Col>
          </Row>

          <h5 className="text-dark mb-3">Temukan produk <span className="font-weight-light">sesuai kebutuhan Anda: </span></h5>

          <Row>
            {proteksi_kesehatan.map((data, i) => (
              <Col sm={12} md={6} lg={4} key={i}>
                <CardProduct 
                  data={data}
                  hoverable={true}
                  onClick={() => router.push(`/products/${data.link}`)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      <section className="product-section" style={{ backgroundColor: "rgb(245, 245, 245)" }}>
        <Container className="product-container">
          <Row className="mb-4">
            <Col sm={12} md={12} lg={12}>
              <div className="title-group-product-sticky">
                <h3 className="fs-22-s title-group-product">Proteksi Penghasilan</h3>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Image src="/images/income-protection-sunshine.jpeg" preview={false} alt="health insurance" className="bor-rad-10px" />
            </Col>
            <Col sm={12} md={6} lg={8}>
              <p className="text-justify">
                Proteksi Penghasilan adalah perlindungan atas nilai ekonomi seseorang terhadap resiko-resiko yang mungkin timbul, resiko pasti dan resiko tidak pasti. Memastikan kesejahteraan hidup keluarganya dengan mempertahankan kelangsungan income yang selama ini diberikan, tanpa perlu terputus akibat resiko kehidupan yang terjadi
              </p>
            </Col>
          </Row>

          <h5 className="text-dark mb-3">Temukan produk <span className="font-weight-light">sesuai kebutuhan Anda: </span></h5>

          <Row>
            {proteksi_penghasilan.map((data, i) => (
              <Col sm={12} md={6} lg={4} key={i}>
                <CardProduct 
                  data={data}
                  hoverable={true}
                  onClick={() => router.push(`/products/${data.link}`)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      <section className="product-section">
        <Container className="product-container">
          <Row className="mb-4">
            <Col sm={12} md={12} lg={12}>
              <div className="title-group-product-sticky">
                <h3 className="fs-22-s title-group-product">Persiapan Dana Waris</h3>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <Row className="align-items-center justify-content-center">
                <Col sm={12} md={8} className="text-center">
                  <Image src="/images/warisan.jpeg" alt="Persiapan dana waris" preview={false} className="bor-rad-10px mb-3" />
                </Col>
              </Row>
            </Col>

            <Col lg={12} md={12} sm={12}>
              <div className="mb-3">
                <p className="text-success fs-26 text-center">
                  <b>Apakah yang Ingin Anda Berikan untuk Keluarga dan Anak-Anak Anda?</b>
                </p>
              </div>
              <div className="mb-3">
                <p className="fs-22 text-center">
                  <i>“Sudahkah Anda mempersiapkan warisan bagi anak-anak Anda?”</i>
                </p>
              </div>
              <div className="mb-3">
                <p>
                  Semua yang telah Anda capai tentu tidak diperoleh dengan mudah. Anda ingin memastikan bahwa hasil kerja keras Anda dapat dinikmati oleh orang-orang terkasih. Untuk dapat memberikan sesuatu yang berharga dan berkualitas bagi keluarga Anda, Anda perlu melakukan perencanaan warisan. Namun, tetap memperhatikan keamanan finansial yang baik untuk Anda. <br /> <br />
                  Siapkan aset masa depan bagi orang-orang yang Anda kasihi melalui pengelolaan keuangan secara terintegrasi dan terencana.

                </p>
              </div>
            </Col>
          </Row>

          <h5 className="text-dark mb-3">Temukan produk <span className="font-weight-light">sesuai kebutuhan Anda: </span></h5>

          <Row>
            {persiapan_dana_waris.map((data, i) => (
              <Col sm={12} md={6} lg={4} key={i}>
                <CardProduct 
                  data={data}
                  hoverable={true}
                  onClick={() => router.push(`/products/${data.link}`)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      <section className="product-section" style={{ backgroundColor: "rgb(245, 245, 245)" }}>
        <Container className="product-container">
          <Row className="mb-4">
            <Col sm={12} md={12} lg={12}>
              <div className="title-group-product-sticky">
                <h3 className="fs-22-s title-group-product">Persiapan Dana Pendidikan Anak</h3>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Image src="/images/prucerah.jpeg" preview={false} alt="health insurance" className="bor-rad-10px" />
            </Col>
            <Col sm={12} md={6} lg={8}>
              <p className="text-justify">
                Memperkenalkan Asuransi Jiwa Syariah PRUCerah Produk Asuransi Dwiguna yang memberikan Perlindungan atas Jaminan Pendidikan Anak atau orang yang Anda sayangi. Terdapat Manfaat Dana Pendidikan, yang memberikan manfaat berupa Penarikan Tunai Sekaligus serta Penarikan Tunai Bulanan selama 4 tahun. Selain itu untuk menjamin keberlangsungan Pendidikan Anak Anda maka produk ini memberikan Manfaat Bebas Kontribusi jika Anda Meninggal Dunia, Terkena Kondisi Kritis atau mengalami Cacat Tetap dan Total.
              </p>
            </Col>
          </Row>

          <h5 className="text-dark mb-3">Temukan produk <span className="font-weight-light">sesuai kebutuhan Anda: </span></h5>

          <Row>
            {persiapan_dana_pendidikan_anak.map((data, i) => (
              <Col sm={12} md={6} lg={4} key={i}>
                <CardProduct 
                  data={data}
                  hoverable={true}
                  onClick={() => router.push(`/products/${data.link}`)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{`
      .product-section:not(:last-of-type){
        margin-bottom: 0px;
        padding-top: 30px;
        padding-bottom: 60px;
        // border-bottom: 1px solid #efefef;
      }
      :global(.about-section){
        border-radius: 10px;
        background-color: #f5f5f5;
      }

      .title-group-product-sticky{
        position: sticky;
        top: 5rem;
      }
      .title-group-product{
        font-size: 24px;
        color: #262626;
        font-weight: 500;
        margin-bottom: 30px;
      }
      .title-group-product:after{
        position: absolute;
        bottom: -14px;
        left: 0;
        width: 72px;
        height: 2px;
        content: "";
        background: #ddd;
      }
      .description-group-product{
        white-space: pre-line;
      }
      :global(.card-highlight) {
        border-radius: 10px;
      }
      :global(.card-highlight-image) {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 200px;
        object-fit: cover;
      }
      `}</style>
    </>
  )
}

export default Products
