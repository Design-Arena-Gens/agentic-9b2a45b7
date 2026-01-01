'use client';

import { useState, useEffect } from 'react';

interface Props {
  projectData: any;
}

export default function Analytics({ projectData }: Props) {
  const [timeRange, setTimeRange] = useState('7d');
  const [mockData, setMockData] = useState<any>(null);

  useEffect(() => {
    // Generate mock analytics data
    const data = {
      overview: {
        totalViews: 487234,
        watchTime: '32,145 hours',
        avgViewDuration: '8:42',
        ctr: 12.4,
        subscribers: 2847,
        likes: 18392,
        comments: 1243,
      },
      retention: [
        { time: '0:00', percentage: 100 },
        { time: '0:30', percentage: 92 },
        { time: '1:00', percentage: 87 },
        { time: '2:00', percentage: 82 },
        { time: '3:00', percentage: 78 },
        { time: '4:00', percentage: 75 },
        { time: '5:00', percentage: 72 },
        { time: '6:00', percentage: 69 },
        { time: '7:00', percentage: 67 },
        { time: '8:00', percentage: 65 },
        { time: '9:00', percentage: 63 },
        { time: '10:00', percentage: 60 },
      ],
      demographics: {
        ageGroups: [
          { range: '13-17', percentage: 8 },
          { range: '18-24', percentage: 32 },
          { range: '25-34', percentage: 38 },
          { range: '35-44', percentage: 15 },
          { range: '45+', percentage: 7 },
        ],
        gender: {
          male: 62,
          female: 36,
          other: 2,
        },
      },
      traffic: [
        { source: 'YouTube Search', percentage: 42, views: 204638 },
        { source: 'Suggested Videos', percentage: 31, views: 151042 },
        { source: 'Browse Features', percentage: 15, views: 73085 },
        { source: 'External', percentage: 8, views: 38978 },
        { source: 'Direct', percentage: 4, views: 19489 },
      ],
      topVideos: [
        {
          title: 'The Disappearance at Devil\'s Hollow',
          views: 487234,
          watchTime: '32,145 hrs',
          retention: 8.2,
          ctr: 12.4,
        },
        {
          title: 'The Cipher Killer: Decoded Messages',
          views: 623891,
          watchTime: '41,267 hrs',
          retention: 8.7,
          ctr: 14.2,
        },
        {
          title: 'Inside Room 303: The Hotel Mystery',
          views: 312456,
          watchTime: '19,234 hrs',
          retention: 7.1,
          ctr: 10.8,
        },
      ],
      insights: [
        {
          type: 'success',
          title: 'High Retention Rate',
          description: 'Your videos maintain 60%+ retention at 10 minutes, significantly above average.',
        },
        {
          type: 'info',
          title: 'Peak Upload Time',
          description: 'Videos uploaded on Fridays at 2 PM EST perform 23% better.',
        },
        {
          type: 'warning',
          title: 'CTR Opportunity',
          description: 'Thumbnails with red color schemes have 18% higher click-through rates.',
        },
        {
          type: 'success',
          title: 'Audience Growth',
          description: 'Subscriber conversion rate is 5.8%, well above the 3% industry average.',
        },
      ],
    };

    setMockData(data);
  }, [timeRange]);

  if (!mockData) {
    return <div className="text-white">Loading analytics...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 border border-red-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Performance Analytics</h2>
            <p className="text-gray-400">Track audience retention, engagement, and optimize content strategy</p>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-600"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-5">
          <div className="text-gray-400 text-sm mb-1">Total Views</div>
          <div className="text-white text-2xl font-bold">{mockData.overview.totalViews.toLocaleString()}</div>
          <div className="text-green-400 text-xs mt-1">↑ 12.4%</div>
        </div>
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-5">
          <div className="text-gray-400 text-sm mb-1">Watch Time</div>
          <div className="text-white text-2xl font-bold">{mockData.overview.watchTime}</div>
          <div className="text-green-400 text-xs mt-1">↑ 8.7%</div>
        </div>
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-5">
          <div className="text-gray-400 text-sm mb-1">Avg Duration</div>
          <div className="text-white text-2xl font-bold">{mockData.overview.avgViewDuration}</div>
          <div className="text-green-400 text-xs mt-1">↑ 5.2%</div>
        </div>
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-5">
          <div className="text-gray-400 text-sm mb-1">CTR</div>
          <div className="text-white text-2xl font-bold">{mockData.overview.ctr}%</div>
          <div className="text-green-400 text-xs mt-1">↑ 2.1%</div>
        </div>
      </div>

      {/* Retention Graph */}
      <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Audience Retention</h3>
        <div className="relative h-64">
          <div className="absolute inset-0 flex items-end justify-between">
            {mockData.retention.map((point: any, idx: number) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-red-600 to-red-800 rounded-t transition-all hover:from-red-500 hover:to-red-700"
                  style={{ height: `${point.percentage}%` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4 text-xs text-gray-400">
          {mockData.retention.map((point: any, idx: number) => (
            idx % 2 === 0 && <span key={idx}>{point.time}</span>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-400">
          Average retention: <span className="text-white font-semibold">72%</span> |
          Industry average: <span className="text-gray-500">45%</span>
        </div>
      </div>

      {/* Traffic Sources & Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {mockData.traffic.map((source: any, idx: number) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{source.source}</span>
                  <span className="text-white">{source.percentage}% ({source.views.toLocaleString()})</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-red-800 rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Demographics</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-400 mb-2">Age Groups</div>
              <div className="space-y-2">
                {mockData.demographics.ageGroups.map((group: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm w-20">{group.range}</span>
                    <div className="flex-1 mx-3">
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-purple-800 rounded-full"
                          style={{ width: `${group.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-white text-sm w-12 text-right">{group.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Gender Distribution</div>
              <div className="flex space-x-2">
                <div className="flex-1 bg-blue-900/30 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{mockData.demographics.gender.male}%</div>
                  <div className="text-xs text-gray-400">Male</div>
                </div>
                <div className="flex-1 bg-pink-900/30 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-pink-400">{mockData.demographics.gender.female}%</div>
                  <div className="text-xs text-gray-400">Female</div>
                </div>
                <div className="flex-1 bg-purple-900/30 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{mockData.demographics.gender.other}%</div>
                  <div className="text-xs text-gray-400">Other</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Videos */}
      <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Top Performing Videos</h3>
        <div className="space-y-3">
          {mockData.topVideos.map((video: any, idx: number) => (
            <div key={idx} className="bg-black/30 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-white font-medium mb-2">{video.title}</h4>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Views:</span>
                      <span className="text-white ml-2">{video.views.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Watch Time:</span>
                      <span className="text-white ml-2">{video.watchTime}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Retention:</span>
                      <span className="text-green-400 ml-2">{video.retention} min</span>
                    </div>
                    <div>
                      <span className="text-gray-400">CTR:</span>
                      <span className="text-blue-400 ml-2">{video.ctr}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockData.insights.map((insight: any, idx: number) => (
            <div
              key={idx}
              className={`border rounded-lg p-4 ${
                insight.type === 'success'
                  ? 'bg-green-900/20 border-green-800/30'
                  : insight.type === 'warning'
                  ? 'bg-yellow-900/20 border-yellow-800/30'
                  : 'bg-blue-900/20 border-blue-800/30'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="text-2xl">
                  {insight.type === 'success' ? '✅' : insight.type === 'warning' ? '⚠️' : 'ℹ️'}
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-semibold mb-1 ${
                      insight.type === 'success'
                        ? 'text-green-400'
                        : insight.type === 'warning'
                        ? 'text-yellow-400'
                        : 'text-blue-400'
                    }`}
                  >
                    {insight.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
