import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface BarChartProps {
  data: BarChartData[];
}

export interface BarChartData {
  name: string;
  value: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function BarChart({ data }: BarChartProps) {
  const getMaxValue = () => {
    let maxValue = 0;
    data.forEach((item) => {
      if (item.value > maxValue) {
        maxValue = item.value;
      }
    });
    return maxValue;
  };

  return data ? (
    <div className="h-[250px] max-w-[300px] mx-auto">
      <ResponsiveContainer width="100%">
        <Chart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, getMaxValue()]}
            dataKey="value"
            allowDecimals={false}
          />
          <Tooltip cursor={{ fill: '#eeeeee' }} />
          <Bar dataKey="value" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
        </Chart>
      </ResponsiveContainer>
    </div>
  ) : null;
}