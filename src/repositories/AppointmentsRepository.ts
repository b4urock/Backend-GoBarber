import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    // const findAppointmentInSameDate = this.appointments.find(appointment =>
    //   isEqual(date, appointment.date),
    // );

    const findAppointment = await this.findOne({
      where: { date }, // { date: date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
