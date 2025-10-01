import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import API from "../../api-server";
import PageMeta from "../../components/common/PageMeta";
import TableKkprl from "../../components/tables/AdminTables/TableKkprl";
import Button from "../../components/ui/button/Button";

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
