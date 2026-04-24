import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Gauge, Target, AlertCircle, CheckCircle } from "lucide-react";

/**
 * Design Philosophy: Dark Mode Moderno com Glassmorphism
 * - Fundo gradiente azul-roxo escuro
 * - Cards com glassmorphism (backdrop blur + transparência)
 * - Tipografia Poppins (títulos) + Inter (corpo)
 * - Cores semânticas: Verde (#4ade80) para lucro, Laranja (#fb923c) para custos
 * - Animações suaves de entrada e hover
 * - Ícones com glow effect para valores críticos
 */

interface Costs {
  fixedMonthly: number;
  maintenancePerKm: number;
  cleaningMonthly: number;
  depreciationPerKm: number;
}

interface Calculations {
  totalCostPerKm: number;
  targetValuePerKm: number;
  breakEvenPoint: number;
  totalMonthlyCosts: number;
  requiredGrossIncome: number;
  netProfit: number;
}

export default function Home() {
  // Input states
  const [gasPrice, setGasPrice] = useState(6.69);
  const [fuelConsumption, setFuelConsumption] = useState(11.1);
  const [totalKmMonth, setTotalKmMonth] = useState(5000);
  const [desiredSalary, setDesiredSalary] = useState(5000);

  // Costs states
  const [costs, setCosts] = useState<Costs>({
    fixedMonthly: 241.41,
    maintenancePerKm: 0.07,
    cleaningMonthly: 320.0,
    depreciationPerKm: 0.07,
  });

  const [editingCosts, setEditingCosts] = useState(false);
  const [tempCosts, setTempCosts] = useState<Costs>(costs);

  // Calculations
  const calculations = useMemo((): Calculations => {
    const fuelCostPerKm = gasPrice / fuelConsumption;
    const totalFuelCost = fuelCostPerKm * totalKmMonth;
    const totalMaintenanceCost = costs.maintenancePerKm * totalKmMonth;
    const totalDepreciationCost = costs.depreciationPerKm * totalKmMonth;

    const totalMonthlyCosts =
      costs.fixedMonthly +
      totalFuelCost +
      totalMaintenanceCost +
      costs.cleaningMonthly +
      totalDepreciationCost;

    const totalCostPerKm = totalMonthlyCosts / totalKmMonth;
    const requiredGrossIncome = desiredSalary + totalMonthlyCosts;
    const targetValuePerKm = requiredGrossIncome / totalKmMonth;
    const breakEvenPoint = totalMonthlyCosts;
    const netProfit = requiredGrossIncome - totalMonthlyCosts;

    return {
      totalCostPerKm,
      targetValuePerKm,
      breakEvenPoint,
      totalMonthlyCosts,
      requiredGrossIncome,
      netProfit,
    };
  }, [gasPrice, fuelConsumption, totalKmMonth, desiredSalary, costs]);

  const handleSaveCosts = () => {
    setCosts(tempCosts);
    setEditingCosts(false);
  };

  const handleResetCosts = () => {
    setTempCosts(costs);
    setEditingCosts(false);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatNumber = (value: number, decimals = 2) => {
    return value.toFixed(decimals);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Calculadora de Lucratividade
          </h1>
          <p className="text-lg text-slate-300">
            Análise completa de custos e rentabilidade para motoristas de aplicativo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Inputs */}
          <div className="lg:col-span-1 space-y-6">
            {/* Basic Inputs */}
            <div className="glass-card">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-400" />
                Configuração Básica
              </h2>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm text-slate-300 mb-1 block">
                    Preço da Gasolina (R$/L)
                  </Label>
                  <Input
                    type="number"
                    value={gasPrice}
                    onChange={(e) => setGasPrice(parseFloat(e.target.value) || 0)}
                    step="0.01"
                    className="glass-input"
                  />
                </div>
                <div>
                  <Label className="text-sm text-slate-300 mb-1 block">
                    Consumo Médio (km/L)
                  </Label>
                  <Input
                    type="number"
                    value={fuelConsumption}
                    onChange={(e) => setFuelConsumption(parseFloat(e.target.value) || 0)}
                    step="0.1"
                    className="glass-input"
                  />
                </div>
                <div>
                  <Label className="text-sm text-slate-300 mb-1 block">
                    KM Total Rodado (mês)
                  </Label>
                  <Input
                    type="number"
                    value={totalKmMonth}
                    onChange={(e) => setTotalKmMonth(parseFloat(e.target.value) || 0)}
                    step="100"
                    className="glass-input"
                  />
                </div>
              </div>
            </div>

            {/* Financial Target */}
            <div className="glass-card">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Meta Financeira
              </h2>
              <div>
                <Label className="text-sm text-slate-300 mb-1 block">
                  Salário Limpo Desejado (R$)
                </Label>
                <Input
                  type="number"
                  value={desiredSalary}
                  onChange={(e) => setDesiredSalary(parseFloat(e.target.value) || 0)}
                  step="100"
                  className="glass-input"
                />
                <p className="text-xs text-slate-500 mt-2">
                  Quanto você quer ganhar por mês (depois dos custos)
                </p>
              </div>
            </div>

            {/* Costs Management */}
            <div className="glass-card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-orange-400" />
                  Custos Mensais
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditingCosts(!editingCosts);
                    setTempCosts(costs);
                  }}
                  className="text-xs"
                >
                  {editingCosts ? "Cancelar" : "Editar"}
                </Button>
              </div>

              {editingCosts ? (
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs text-slate-400 mb-1 block">
                      IPVA/Seguro (R$/mês)
                    </Label>
                    <Input
                      type="number"
                      value={tempCosts.fixedMonthly}
                      onChange={(e) =>
                        setTempCosts({
                          ...tempCosts,
                          fixedMonthly: parseFloat(e.target.value) || 0,
                        })
                      }
                      step="0.01"
                      className="glass-input text-sm"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-slate-400 mb-1 block">
                      Manutenção/Pneus (R$/km)
                    </Label>
                    <Input
                      type="number"
                      value={tempCosts.maintenancePerKm}
                      onChange={(e) =>
                        setTempCosts({
                          ...tempCosts,
                          maintenancePerKm: parseFloat(e.target.value) || 0,
                        })
                      }
                      step="0.01"
                      className="glass-input text-sm"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-slate-400 mb-1 block">
                      Limpeza (R$/mês)
                    </Label>
                    <Input
                      type="number"
                      value={tempCosts.cleaningMonthly}
                      onChange={(e) =>
                        setTempCosts({
                          ...tempCosts,
                          cleaningMonthly: parseFloat(e.target.value) || 0,
                        })
                      }
                      step="0.01"
                      className="glass-input text-sm"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-slate-400 mb-1 block">
                      Depreciação (R$/km)
                    </Label>
                    <Input
                      type="number"
                      value={tempCosts.depreciationPerKm}
                      onChange={(e) =>
                        setTempCosts({
                          ...tempCosts,
                          depreciationPerKm: parseFloat(e.target.value) || 0,
                        })
                      }
                      step="0.01"
                      className="glass-input text-sm"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      onClick={handleSaveCosts}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      size="sm"
                    >
                      Salvar
                    </Button>
                    <Button
                      onClick={handleResetCosts}
                      variant="outline"
                      className="flex-1"
                      size="sm"
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>IPVA/Seguro:</span>
                    <span className="font-semibold">{formatCurrency(costs.fixedMonthly)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Manutenção/Pneus:</span>
                    <span className="font-semibold">{formatNumber(costs.maintenancePerKm)}/km</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Limpeza:</span>
                    <span className="font-semibold">{formatCurrency(costs.cleaningMonthly)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Depreciação:</span>
                    <span className="font-semibold">{formatNumber(costs.depreciationPerKm)}/km</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Results Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Target Value Per KM Card */}
              <div className="glass-card bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Valor Mínimo por KM (Rebú)</p>
                    <p className="text-3xl font-bold text-blue-400">
                      R$ {formatNumber(calculations.targetValuePerKm, 3)}
                    </p>
                  </div>
                  <Target className="w-8 h-8 text-blue-400 opacity-50" />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Recuse corridas abaixo deste valor
                </p>
              </div>

              {/* Total Monthly Costs Card */}
              <div className="glass-card bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Custos Totais Mensais</p>
                    <p className="text-3xl font-bold glow-danger">
                      {formatCurrency(calculations.totalMonthlyCosts)}
                    </p>
                  </div>
                  <TrendingDown className="w-8 h-8 text-red-400 opacity-50" />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  {formatCurrency(calculations.totalCostPerKm)}/km
                </p>
              </div>

              {/* Cost Per KM Card */}
              <div className="glass-card bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Custo Total por KM</p>
                    <p className="text-3xl font-bold glow-warning">
                      R$ {formatNumber(calculations.totalCostPerKm, 3)}
                    </p>
                  </div>
                  <Gauge className="w-8 h-8 text-orange-400 opacity-50" />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Custo operacional por quilômetro
                </p>
              </div>

              {/* Required Gross Income Card */}
              <div className="glass-card bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Faturamento Necessário</p>
                    <p className="text-3xl font-bold glow-success">
                      {formatCurrency(calculations.requiredGrossIncome)}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-400 opacity-50" />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Para ganhar R$ {formatNumber(desiredSalary)} líquido
                </p>
              </div>
            </div>

            {/* Break Even Point */}
            <div className="glass-card bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-500/20">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Ponto de Equilíbrio
                  </p>
                  <p className="text-4xl font-bold text-yellow-400">
                    {formatCurrency(calculations.breakEvenPoint)}
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    Faturamento mínimo para não ter prejuízo com o veículo
                  </p>
                </div>
              </div>
            </div>

            {/* Final Summary - Action Card */}
            <div className="glass-card bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 ring-2 ring-purple-500/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Resumo de Ação</h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white/5 rounded-lg p-3 border border-purple-500/20">
                      <p className="text-slate-400 mb-1">Para ganhar</p>
                      <p className="text-2xl font-bold text-purple-300">
                        {formatCurrency(desiredSalary)} por mês
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3 border border-purple-500/20">
                      <p className="text-slate-400 mb-1">Você precisa rodar</p>
                      <p className="text-2xl font-bold text-purple-300">
                        {totalKmMonth.toLocaleString("pt-BR")} km
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-3 border border-purple-500/20">
                      <p className="text-slate-400 mb-1">Recebendo no mínimo</p>
                      <p className="text-2xl font-bold text-green-400">
                        R$ {formatNumber(calculations.targetValuePerKm, 3)} por km
                      </p>
                    </div>

                    <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20 mt-4">
                      <p className="text-slate-300 text-center font-semibold">
                        ✓ Recuse corridas abaixo de R$ {formatNumber(calculations.targetValuePerKm, 3)}/km
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Table */}
            <div className="glass-card">
              <h2 className="text-xl font-semibold text-white mb-4">Resumo Detalhado</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-500/30">
                      <th className="text-left py-3 px-3 text-slate-400 font-semibold">Descrição</th>
                      <th className="text-right py-3 px-3 text-slate-400 font-semibold">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-500/20">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-slate-300">Preço da Gasolina</td>
                      <td className="text-right py-3 px-3 text-slate-200">
                        {formatCurrency(gasPrice)}/L
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-slate-300">Consumo Médio</td>
                      <td className="text-right py-3 px-3 text-slate-200">
                        {formatNumber(fuelConsumption)} km/L
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-slate-300">KM Total Rodado</td>
                      <td className="text-right py-3 px-3 text-slate-200">
                        {totalKmMonth.toLocaleString("pt-BR")} km
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors bg-slate-500/10">
                      <td className="py-3 px-3 text-slate-300 font-semibold">Custo de Combustível</td>
                      <td className="text-right py-3 px-3 text-slate-200 font-semibold">
                        {formatCurrency((gasPrice / fuelConsumption) * totalKmMonth)}
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-slate-300">Custo Fixo (IPVA/Seguro)</td>
                      <td className="text-right py-3 px-3 text-slate-200">
                        {formatCurrency(costs.fixedMonthly)}
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-slate-300">Manutenção/Pneus</td>
                      <td className="text-right py-3 px-3 text-slate-200">
                        {formatCurrency(costs.maintenancePerKm * totalKmMonth)}
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-slate-300">Limpeza</td>
                      <td className="text-right py-3 px-3 text-slate-200">
                        {formatCurrency(costs.cleaningMonthly)}
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-slate-300">Depreciação</td>
                      <td className="text-right py-3 px-3 text-slate-200">
                        {formatCurrency(costs.depreciationPerKm * totalKmMonth)}
                      </td>
                    </tr>
                    <tr className="bg-red-500/10 border-t-2 border-red-500/30">
                      <td className="py-3 px-3 text-red-300 font-bold">Total de Custos</td>
                      <td className="text-right py-3 px-3 text-red-300 font-bold">
                        {formatCurrency(calculations.totalMonthlyCosts)}
                      </td>
                    </tr>
                    <tr className="bg-green-500/20 border-t-2 border-green-500/30">
                      <td className="py-3 px-3 text-green-300 font-bold text-base">Faturamento Necessário</td>
                      <td className="text-right py-3 px-3 text-green-300 font-bold text-base">
                        {formatCurrency(calculations.requiredGrossIncome)}
                      </td>
                    </tr>
                    <tr className="bg-blue-500/20 border-t-2 border-blue-500/30">
                      <td className="py-3 px-3 text-blue-300 font-bold text-base">Salário Líquido (Meta)</td>
                      <td className="text-right py-3 px-3 text-blue-300 font-bold text-base">
                        {formatCurrency(desiredSalary)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
