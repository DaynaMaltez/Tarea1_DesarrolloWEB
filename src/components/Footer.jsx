import { Container } from 'react-bootstrap'
export default function Footer({ navigate }) {
  return <footer className="site-footer"><Container><div className="footer-grid"><div><div className="footer-brand"><span>DM</span> BEAUTY</div><p>Belleza que celebra tu esencia. Productos seleccionados para acompañarte todos los días.</p></div><div><h3>Explora</h3><button onClick={() => navigate('inicio')}>Inicio</button><button onClick={() => navigate('productos')}>Catálogo</button><button onClick={() => navigate('contacto')}>Contacto</button></div><div><h3>Proyecto académico</h3><p><strong>Dayna Meza</strong><br />Carnet: 9490-23-3808</p></div></div><div className="footer-bottom">© 2026 DM Beauty · Desarrollo Web · Todos los derechos reservados</div></Container></footer>
}
