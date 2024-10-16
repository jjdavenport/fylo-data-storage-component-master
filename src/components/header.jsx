import documentIcon from "./assets/icon-document.svg";
import logoIcon from "./assets/logo.svg";
import uploadIcon from "./assets/icon-upload.svg";
import folderIcon from "./assets/icon-folder.svg";

const Header = () => {
  return (
    <>
      <header>
        <img src={logoIcon} />
        <img src={documentIcon} />
        <img src={uploadIcon} />
        <img src={folderIcon} />
      </header>
    </>
  );
};

export default Header;
