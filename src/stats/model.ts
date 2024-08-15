import si from 'systeminformation';

export class HwInfo {
   private cpu: si.Systeminformation.CpuData;
   private cpuTemperature: si.Systeminformation.CpuTemperatureData;
   private battery: si.Systeminformation.BatteryData;

   // constructor() {
   // }

   format() {
      const { cpu, cpuTemperature, battery } = this;

      return {
         cpu,
         cpuTemperature,
         battery
      }
   }

   async sync() {
      const [ cpu, cpuTemperature, battery ] = await Promise.all([
         si.cpu(), si.cpuTemperature(), si.battery(),
      ])

      this.cpu = cpu;
      this.cpuTemperature = cpuTemperature;
      this.battery = battery;

      return this;
   }
}