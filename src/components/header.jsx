import documentIcon from "./assets/icon-document.svg";
import logoIcon from "./assets/logo.svg";
import uploadIcon from "./assets/icon-upload.svg";
import folderIcon from "./assets/icon-folder.svg";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-8 rounded-l-lg rounded-br-lg rounded-tr-custom bg-darkBlue p-10 md:h-fit md:gap-6 md:pr-32">
        <img className="w-36 object-contain" src={logoIcon} />
        <ul className="flex items-center gap-4">
          <li className="flex h-14 w-14 items-center justify-center rounded-lg bg-veryDarkBlue md:h-12 md:w-12">
            <img src={documentIcon} />
          </li>
          <li className="flex h-14 w-14 items-center justify-center rounded-lg bg-veryDarkBlue md:h-12 md:w-12">
            <img src={folderIcon} />
          </li>
          <li className="flex h-14 w-14 items-center justify-center rounded-lg bg-veryDarkBlue md:h-12 md:w-12">
            <img src={uploadIcon} />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
