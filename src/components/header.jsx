import documentIcon from "./assets/icon-document.svg";
import logoIcon from "./assets/logo.svg";
import uploadIcon from "./assets/icon-upload.svg";
import folderIcon from "./assets/icon-folder.svg";

const Header = () => {
  return (
    <>
      <header className="bg-darkBlue rounded-tr-custom flex flex-col gap-8 rounded-l-lg rounded-br-lg p-12">
        <img className="w-36 object-contain" src={logoIcon} />
        <ul className="flex items-center gap-4">
          <li className="bg-veryDarkBlue flex h-14 w-14 items-center justify-center rounded-lg">
            <img src={documentIcon} />
          </li>
          <li className="bg-veryDarkBlue flex h-14 w-14 items-center justify-center rounded-lg">
            <img src={folderIcon} />
          </li>
          <li className="bg-veryDarkBlue flex h-14 w-14 items-center justify-center rounded-lg">
            <img src={uploadIcon} />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
