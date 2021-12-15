import { Equipmentdatabase } from "../../firebase";

export function updateEquipment(id, equipment) {
  return (dispatch) => Equipmentdatabase.child(id).update(equipment);
}
