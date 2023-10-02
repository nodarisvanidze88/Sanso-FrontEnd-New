import React, { useState, useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpWideShort, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons"
import EditDellButtons from "./TableButtons";
import DeleteConfirmationModal from "../Modals/DeleteConfirmationModal";
// import './customerTable.css'

export default function CreateTable({ cols, content, refresh }) {
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
    const [itemToEditOrDelete, setItemToEditOrDelete] = useState([])
    function setDelEditItems(data) {
        setItemToEditOrDelete(data)
    }
console.log(isModalDeleteOpen)
    function setDelModalOpen(x) {
        setIsModalDeleteOpen(x)
    }
    function setEditModalOpen(x) {
        setIsModalEditOpen(x)
    }

    const columns = useMemo(() => cols, [cols])
    const data = useMemo(() => content, [content])
    console.log(content)

    const {
        getTableProps,
        getTableBodyProps,
        rows,
        state,
        prepareRow,
        headerGroups,
        setGlobalFilter,
    } = useTable({ columns, data }, useGlobalFilter, useSortBy)
    const { globalFilter } = state

    return (
        <div className="table-container">
            <table {...getTableProps()} className="table table-striped table-dark table-hover">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ?
                                            (column.isSortedDesc ? <FontAwesomeIcon icon={faArrowDownWideShort} />
                                                : <FontAwesomeIcon icon={faArrowUpWideShort} />) : ""}
                                    </span>
                                </th>
                            ))}
                            <th className="customer-table-action-header">მოქმედება</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                                <EditDellButtons
                                    row={row}
                                    itemToEditOrDelete={setDelEditItems}
                                    isModalEditOpen={setEditModalOpen}
                                    isModalDeleteOpen={setDelModalOpen}
                                />
                            </tr>)
                    })}
                </tbody>
            </table>
            <DeleteConfirmationModal
                isOpen={isModalDeleteOpen}
                onRequestClose={() => setIsModalDeleteOpen(false)}
                delateItem={itemToEditOrDelete}
                refresh={refresh} />
        </div>
    )
}