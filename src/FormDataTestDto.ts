import { HasMimeType, IsFiles, MemoryStoredFile } from 'nestjs-form-data';

export class FormDataTestDto {
  @IsFiles()
  @HasMimeType(['image/*'], { each: true })
  avatars: MemoryStoredFile[];
}
