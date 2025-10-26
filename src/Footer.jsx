export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      textAlign: 'center',
      padding: "80px 40px 40px 20px",
      fontSize: '12px',
      color: '#FFF'
    }}>
      <p>© {year} Daniele Bartorilla. Tutti i diritti sul sito, relativi contenuti e foto sono riservati.</p>
    </footer>
  );
};