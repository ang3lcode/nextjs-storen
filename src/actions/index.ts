"use server";

export const handleCreateUser = async (formData) => {
  console.log("handleCreateUser", formData);

  // Si necesitas manejar lógica de servidor (como guardar en una base de datos):
  // await database.saveUser(formData);

  return { success: true }; // Retorna una respuesta si es necesario
};