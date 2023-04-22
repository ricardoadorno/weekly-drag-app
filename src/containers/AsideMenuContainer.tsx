import AsideForm from "../components/AsideForm";
import AsideList from "../components/AsideList";

export default function AsideMenuContainer() {
  return (
    <section className="asideMenu">
      <h2>Events List</h2>
      <AsideForm />
      <AsideList />
    </section>
  );
}
