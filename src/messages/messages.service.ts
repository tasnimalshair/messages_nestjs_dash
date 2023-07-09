/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MessagsRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepository: MessagsRepository) {}

  findOne(id: string) {
    return this.messageRepository.findOne(id);
  }
  findAll() {
    return this.messageRepository.findAll();
  }
  create(content: string) {
    return this.messageRepository.create(content);
  }
}
