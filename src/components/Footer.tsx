const Footer = () => {
  return (
    <div className=" bg-pink-100">
      <div className="mx-auto max-w-screen-xl space-y-16 px-4 pt-8 pb-6 text-center md:pt-16 md:pb-12">
        {/* Copyrights */}
        <div className="flex flex-col-reverse items-center justify-between space-x-4 md:flex-row">
          <span>© 2022 . All rights reserved.</span>
          <div className="flex gap-4">
            <a
              className="font-semibold text-pink-600 hover:font-bold hover:text-pink-800"
              href="https://github.com/ClubInfoInsaT/nuit-de-l-info"
            >
              Code Source
            </a>
            <a
              className="font-semibold text-pink-600 hover:font-bold hover:text-pink-800"
              href="https://www.etud.insa-toulouse.fr/~clubinfo/"
            >
              Club Info INSA Toulouse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
