import { db, hasDatabase } from "./db";
import { messages, type InsertMessage, type Message } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    if (!db) throw new Error("Database client is not initialized");
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export class InMemoryStorage implements IStorage {
  private items: Message[] = [];
  private nextId = 1;

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.nextId++,
      name: insertMessage.name,
      email: insertMessage.email,
      message: insertMessage.message,
      createdAt: new Date(),
    } as unknown as Message;

    this.items.push(message);
    return message;
  }
}

export const storage = hasDatabase && db ? new DatabaseStorage() : new InMemoryStorage();
