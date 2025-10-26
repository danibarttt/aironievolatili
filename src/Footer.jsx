export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      textAlign: 'center',
      paddingTop: '80px',
      paddingBottom: '20px',
      fontSize: '14px',
      color: '#FFF'
    }}>
      <p>© {year} Daniele Bartorilla. Tutti i diritti sul sito, relativi contenuti e foto sono riservati.</p>
    </footer>
  );
};