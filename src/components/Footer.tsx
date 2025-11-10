const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} John Doe. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
