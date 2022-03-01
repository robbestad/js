import { Driver } from "@/drivers";
import { File } from "./File";

export abstract class FilesystemDriver extends Driver {
  public abstract fileExists(path: string): Promise<boolean>;
  public abstract directoryExists(path: string): Promise<boolean>;
  public abstract has(path: string): Promise<boolean>;
  public abstract read(path: string): Promise<File>;
}