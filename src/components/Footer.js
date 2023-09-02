export const Footer = () => {

    const date = new Date();
    const copyrightDate = date.getFullYear();

  return (
    <footer>Copyright {copyrightDate}</footer>
  )
}
