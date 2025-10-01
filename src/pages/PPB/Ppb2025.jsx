import PageMeta from "../../components/common/PageMeta";
import TableKkprl from "../../components/tables/AdminTables/TableKKPRL";
import Button from "../../components/ui/button/Button";

export default function Ppb2025() {
  return (
    <>
      <PageMeta
        title="Admin Penerima Bantuan Tahun 2025"
        description="Peta Potensi Perikanan | Dinas Kelautan dan Perikanan Prov. Kalimantan Timur"
      />
      <Button className="w-full mb-5" size="sm">
        Edit Penerima Bantuan
      </Button>
      <TableKkprl />
    </>
  );
}
