import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Briefcase, Search, Users, Calendar as CalendarIcon, MessageSquare, Sparkles, LogOut, Mail, Phone, MapPin as LocationIcon, GraduationCap, BookOpen, Users as UsersIcon, ChartBar, Globe, Linkedin, Github, Twitter } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import shreyImage from "/public/WhatsApp Image 2024-10-03 at 23.35.31_e48d3cc3.jpg"; 

const mockJobStats = [
  { year: 2019, employed: 85, furtherStudies: 10, seeking: 5 },
  { year: 2020, employed: 82, furtherStudies: 12, seeking: 6 },
  { year: 2021, employed: 88, furtherStudies: 9, seeking: 3 },
  { year: 2022, employed: 90, furtherStudies: 8, seeking: 2 },
  { year: 2023, employed: 92, furtherStudies: 7, seeking: 1 },
]

function JobStatistics() {
    return (
      <Card className="bg-gradient-to-br from-purple-800 to-pink-900 border-none">
        <CardHeader>
          <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex items-center">
            <ChartBar className="mr-2" />
            Job Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-between">
            {mockJobStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex space-x-1">
                  <motion.div
                    className="w-4 bg-gradient-to-t from-blue-500 to-cyan-300"
                    initial={{ height: 0 }}
                    animate={{ height: `${stat.employed}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                  <motion.div
                    className="w-4 bg-gradient-to-t from-purple-500 to-pink-300"
                    initial={{ height: 0 }}
                    animate={{ height: `${stat.furtherStudies}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                  />
                  <motion.div
                    className="w-4 bg-gradient-to-t from-pink-500 to-orange-300"
                    initial={{ height: 0 }}
                    animate={{ height: `${stat.seeking}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.4 }}
                  />
                </div>
                <span className="text-purple-200 text-xs mt-2">{stat.year}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-300 mr-2" />
              <span className="text-blue-200 text-xs">Employed</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-300 mr-2" />
              <span className="text-purple-200 text-xs">Further Studies</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-300 mr-2" />
              <span className="text-pink-200 text-xs">Job Seeking</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
  export default JobStatistics;