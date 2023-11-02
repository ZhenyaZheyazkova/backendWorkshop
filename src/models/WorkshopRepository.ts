import WorkshopModel, { IWorkshop } from '../models/Workshop';

export async function createWorkshop(workshopData: IWorkshop): Promise<IWorkshop> {
    try {
        const newWorkshop = new WorkshopModel(workshopData);
        return await newWorkshop.save();
    } catch (error) {
        throw error;
    }
}

export async function findWorkshopById(workshopId: string): Promise<IWorkshop | null> {
    try {
        return await WorkshopModel.findById(workshopId).exec();
    } catch (error) {
        throw error;
    }
}