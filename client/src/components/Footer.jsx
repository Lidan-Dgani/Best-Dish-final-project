const Footer = () => {
  return (
    <div className="border-top py-3 text-center">
      <span>
        <i className="bi bi-signpost-split"></i> Best Dish
      </span>
      <span className="ms-1">&copy;</span>
      <span className="ms-1">{new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
