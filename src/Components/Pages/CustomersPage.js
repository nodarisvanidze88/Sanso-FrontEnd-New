import { useEffect, useState } from "react"
import { Urls } from "../GeneralComponents&Functions/URLS/urls"
import { CustomerListColumns } from "../GeneralComponents&Functions/Tables/TableColumns/CustomerListColumns"
import { GetData } from "../GeneralComponents&Functions/Crud/GetData"
import CreateTable from "../GeneralComponents&Functions/Tables/CreateTable"
import EditCustomerModal from "../GeneralComponents&Functions/Modals/CustomerModals/EditCustomerModal"
export default function CustomersPage() {

    const [itemList, setItemList] = useState([])

    const getContent = () => {
        GetData(Urls.customers, setItemList)
    }

    useEffect(() => {
        getContent()
    }, [])

    return (
        <div>
            {itemList.length > 0 && (
                <>
                    <CreateTable
                        content={itemList}
                        cols={CustomerListColumns}
                        refresh={getContent} />
                    <EditCustomerModal 
                    isOpen
                    onRequestClose
                    edit
                    refresh={getContent}
                    />
                </>
            )}
        </div>
    )
}