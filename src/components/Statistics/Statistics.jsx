import { StatisticsWrapper, StatisticsTitle, Statisticsdiv, StatisticsList } from './Statistics.styled.js';
//import PropTypes from 'prop-types';


export const Statistics = ({ title, stats}) => {
    return (
<StatisticsWrapper>   
{title && <StatisticsTitle>{title}</StatisticsTitle>}
<Statisticsdiv>
    {stats.map((stat) =>
    <StatisticsList key={stat.id}>
    <span className="label">{stat.label}</span>  
    <span className="percentage">{stat.percentage}%</span>
    </StatisticsList>
    )}
</Statisticsdiv>
</StatisticsWrapper>
);
};

