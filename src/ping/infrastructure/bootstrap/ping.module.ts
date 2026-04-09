import { Module } from '@nestjs/common';
import { PingController } from '../controller/ping.controller';
import { PingUseCase } from '../../application/use-cases/ping.usecase';
import { PingService } from '../../domain/service/ping.service';
import { PingRepository } from '../../domain/repository/ping.repository';
import { PingRepositoryImpl } from '../repository/ping.repository.impl';
import { EnvValidationMiddleware } from '../../../common/middleware/env-validation.middleware';
import { EnvConstants } from '../../../common/constants/env.constants';

@Module({
  providers: [
    PingController,
    PingUseCase,
    PingService,
    EnvValidationMiddleware.register(EnvConstants.REQUERIDAS_PING),
    { provide: PingRepository, useClass: PingRepositoryImpl },
  ],
})
export class PingModule {}
