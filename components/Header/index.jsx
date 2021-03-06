import { useState } from 'react'
import { useRouter } from 'next/router'
import { Dropdown, Menu, Drawer } from 'antd'
import { Nav, Navbar, Container } from 'react-bootstrap'

import { aboutUsMenuData, productMenuData, mobileNavigation } from 'data/navbar'

import Link from 'next/link'
import Image from 'next/image'

const aboutUsMenu = (
  <Menu className="d-none d-lg-block user-select-none">
    {aboutUsMenuData.map((data, i) => (
      <Menu.Item key={i} className="text-capitalize">
        {data.link ? (
          <Link href={`/about/${data.link}`}>
            <a className="text-decoration-none">{data.label}</a>
          </Link>
        ) : (
          <a
            rel="noreferrer"
            href="https://payment.prudential.co.id/"
            target="_blank"
            className="text-decoration-none"
          >
            {data.label}
          </a>
        )}
      </Menu.Item>
    ))}
  </Menu>
)

const productMenu = (
  <Menu className="d-none d-lg-block user-select-none">
    {productMenuData.map((data, i) => (
      <Menu.ItemGroup
        title={<span className="fw-500 text-capitalize">{data.label}</span>}
        key={i}
      >
        {data.children.map((child, i) => (
          <Menu.Item key={i} className="text-capitalize">
            <Link href={`/products/${child.link}`}>
              <a className="text-decoration-none">{child.label}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    ))}
  </Menu>
)

const Header = () => {
  const router = useRouter()
  const [visible, setVisible] = useState(false)

  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)

  return (
    <>
      <Navbar
        expand="lg"
        expanded={false}
        variant="light"
        bg="light"
        fixed="top"
        className="bg-white navbar-shadow-bottom user-select-none"
      >
        <Container>
          <Navbar.Brand href="/" className="font-italic">
            <Image
              quality={60}
              src="/images/logo.png"
              width={175}
              height={45}
              className="d-inline-block align-top"
              alt={process.env.NEXT_PUBLIC_APP_NAME + ' logo'}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            className="border-0 px-2"
            aria-controls={process.env.NEXT_PUBLIC_APP_NAME + '-navbar-nav'}
            onClick={showDrawer}
          >
            <i className="far fa-bars" />
          </Navbar.Toggle>

          <Navbar.Collapse id="mypru-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="/">Home</Nav.Link>

              <Dropdown
                arrow
                overlay={productMenu}
                trigger={["hover"]}
                placement="bottomCenter"
                overlayClassName="position-fixed"
                onClick={() => router.push("/products")}
              >
                <Nav.Link className="mx-2">Produk</Nav.Link>
              </Dropdown>

              <Link href="/business-opportunities" passHref>
                <Nav.Link as="a">Peluang Bisnis</Nav.Link>
              </Link>

              <Dropdown
                arrow
                overlay={aboutUsMenu}
                trigger={["hover"]}
                placement="bottomCenter"
                overlayClassName="position-fixed"
                onClick={() => router.push("/about")}
              >
                <Nav.Link className="mx-2">Tentang Kami</Nav.Link>
              </Dropdown>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

      <Drawer
        placement="right"
        zIndex="1030"
        onClose={onClose}
        visible={visible}
        closeIcon={ <i className="fas fa-times" /> }
        className="d-block d-sm-block d-md-block d-lg-none d-xl-none"
      >
        <Nav className="flex-column mt-3">
          {mobileNavigation.map((data, i) => (
            <Link href={data.link} key={i} passHref>
              <Nav.Link as="a" className="border-bottom nav-mobile text-reset" onClick={onClose}>
                {data.label}
              </Nav.Link>
            </Link>
          ))}
        </Nav>
      </Drawer>

      <style jsx>{`
      :global(.navbar-light .navbar-nav .nav-link) {
        color: rgba(0, 0, 0, 0.7);
      }
      :global(.navbar-light .navbar-nav .nav-link:focus, .navbar-light
          .navbar-nav
          .nav-link:hover) {
        border-radius: 2px;
        color: rgba(0, 0, 0, 0.95);
        background-color: rgba(0, 0, 0, 0.05);
      }
      :global(.navbar-shadow-bottom) {
        box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 15px !important;
      }
      :global(.nav-mobile:hover){
        color: #212529;
        background-color: rgba(0,0,0,.075);
      }
      `}</style>
    </>
  )
}

export default Header
