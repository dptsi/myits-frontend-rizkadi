import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import MenuWrap from "@/components/atoms/MenuWrap";
import PageRow from "@/components/atoms/PageRow";
import {
  TableFilter,
  TableFilterDate,
  TableSearch,
  TableSorting,
  TableSortingCol,
  TableSortingRow,
  TableWrapper,
} from "@/components/molecules/Table";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import { ModalButton } from "@/components/organisms/Modal";
import PageBanner from "@/components/organisms/PageBanner";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { DropdownItem, DropdownItemDate } from "@/data/dummy";
import { kolomTabelBerkas } from "@/data/table";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { Box, Flex, TableContainer } from "@chakra-ui/react";
import { table } from "console";
import { useState } from "react";

const Cuti = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const URL = "/api/berkas/";
  const infiniteData = InfiniteQuery(URL, "berkas");
  const table = TableLoadMoreConf(
    infiniteData.flatData,
    kolomTabelBerkas,
    globalFilter,
    setGlobalFilter
  );
  return (
    <>
      <PageTransition>
        <PageRow>
          <ContainerQuery>
            <TableWrapper>
              <TableSorting>
                {/* First row */}
                <TableSortingRow>
                  {/* First Column */}
                  <TableSortingCol>
                    <TableFilterDate
                      placeholder="Tanpa batas waktu"
                      data={DropdownItemDate}
                      column={table.getHeaderGroups()[0].headers[2].column}
                    ></TableFilterDate>

                    <TableFilter
                      placeholder="Semua jenis"
                      data={DropdownItem}
                      column={table.getHeaderGroups()[0].headers[1].column}
                    ></TableFilter>
                  </TableSortingCol>

                  {/* Second Column */}
                  <TableSortingCol>
                    <TableSearch
                      placeholder="Search"
                      target={setGlobalFilter}
                    ></TableSearch>
                  </TableSortingCol>
                </TableSortingRow>
              </TableSorting>

              <TableContainer>
                <TableInfinite
                  table={table}
                  infiniteData={infiniteData}
                  select={true}
                ></TableInfinite>
              </TableContainer>
            </TableWrapper>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Cuti;
