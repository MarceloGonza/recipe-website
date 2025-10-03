export default function Header() {
  return (
    <div className="flex justify-center items-center">
      <nav className="flex justify-center items-center">
        <ul className="flex flex-nowrap justify-between gap-30 items-center">
          <li>
            <a href="#">Tendencias</a>
          </li>
          <li>
            <a href="#">Cenas rápidas</a>
          </li>
          <li>
            <a href="#">Postres</a>
          </li>
          <li>
            <a href="#">Acerca de</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
