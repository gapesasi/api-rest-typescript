import { RowDataPacket } from "mysql2";

export default interface Book extends RowDataPacket {
  id?: number;
  title?: string;
  author?: string;
  summary?: string;
  pages?: number;
}
