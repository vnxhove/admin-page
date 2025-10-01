import PageMeta from "../../components/common/PageMeta";
import TableKkprl from "../../components/tables/AdminTables/TableKkprl";

export default function Admin() {
  return (
    <>
      <PageMeta
        title="Admin Dashboard"
        description="Admin Dashboard | Peta Potensi Perikanan | Dinas Kelautan dan Perikanan Prov. Kalimantan Timur"
      />
      <TableKkprl />
    </>
  );
}
