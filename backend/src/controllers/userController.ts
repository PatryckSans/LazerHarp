import { Request, Response } from 'express';
import * as UserService from '../services/userService';

export default class UserController {
  public static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const user = await UserService.createUser(name, email, password);
      res.status(201).json(user);
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public static async loginUser(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await UserService.loginUser(email, password);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
      }
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public static async getUserDetails(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await UserService.getUserDetails(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const updatedUser = await UserService.updateUser(id, name, email, password);
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await UserService.deleteUser(id);
      res.status(204).send();
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}
