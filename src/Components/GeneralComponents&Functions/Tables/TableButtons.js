import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

export default function EditDellButtons({row, itemToEditOrDelete, isModalEditOpen, isModalDeleteOpen}) {
    return (
        <td className="action-row">
            <div className="buttons-column">
                <div className="button-edit">
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => {
                        itemToEditOrDelete(row.original)
                        isModalEditOpen(true)
                    }}>
                        <FontAwesomeIcon icon={faPenToSquare} size="sm" />
                    </button>
                </div>
                <div className="button-delete">
                    <button type="button" className="btn btn-danger btn-sm"
                        onClick={() => {
                            itemToEditOrDelete(row.original.id)
                            isModalDeleteOpen(true)
                        }}>
                        <FontAwesomeIcon icon={faTrash} size="sm" />
                    </button>
                </div>
            </div>
        </td>
    )
}