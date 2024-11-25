import prisma from "../config/prisma.js";

export const createUser = async (data) => {
  const { name, email, password, age, address } = data;
  return await prisma.user.create({
    data: {
      name,
      email,
      password,
      age,
      address,
    },
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const updateUser = async (data) => {
  const { email, password, name, age, address } = data;
  await prisma.user.update({
    where: {
      id: data.params.id,
    },
    data: {
      email,
      name,
      password,
      address,
      age,
      address,
    },
  });
};

export const deleteUser = async (data) => {
  await prisma.user.delete({
    where: {
      id: data.params.id,
    },
  });
};
