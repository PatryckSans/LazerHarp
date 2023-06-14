import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(name: string, email: string, password: string): Promise<User> {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return user;
}

export async function loginUser(email: string, password: string): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });

  return user;
}

export async function getUserDetails(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}

export async function updateUser(id: string, name: string, email: string, password: string): Promise<User | null> {
  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      password,
    },
  });

  return updatedUser;
}

export async function deleteUser(id: string): Promise<void> {
  await prisma.user.delete({
    where: {
      id,
    },
  });
}
